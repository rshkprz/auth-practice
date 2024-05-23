import { SessionData } from "./lib";
import { defaultSession, sessionOptions, sleep } from "./lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
    session.password = defaultSession.password;
  }

  if (shouldSleep) {
    // simulate looking up the user in db
    await sleep(250);
  }

  return session;
}

export async function logout() {
  "use server";

  // false => no db call for logout
  const session = await getSession(false);
  session.destroy();
  revalidatePath("/");
}

export async function login(formData: FormData) {
  "use server";

  const session = await getSession();

  session.username = (formData.get("username") as string) ?? "No username";
  session.password = (formData.get("username") as string) ?? "No username";
  session.isLoggedIn = true;
  await session.save();
  revalidatePath("/");
}

export async function signup(){
  "use server"

  
}