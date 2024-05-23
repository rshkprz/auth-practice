import * as css from "@/app/css";

import { SubmitButton } from "./submit-button";
import { Input } from "./input";
import { getSession, login, logout, signup } from "./actions";

export async function Form() {
  const session = await getSession();

  if (session.isLoggedIn) {
    return (
      <>
        <p className="text-lg">
          Logged in user: <strong>{session.username}</strong>
        </p>
        <LogoutButton />
      </>
    );
  }
  return (
  <div>
    <LoginForm />
    <SignupForm />
  </div>
  )
}

function SignupForm(){
  return (
    <form action={signup} className={css.form}>
      <label className="block text-lg">
        <input type="number" />
        <Input placeholder="Phone no." />
        <Input placeholder="Username" />
        <Input placeholder="password" />
      </label>
      <div>
        <SubmitButton value="Sign Up" />
      </div>
    </form> 
  );
}

function LoginForm() {
  return (
    <form action={login} className={css.form}>
      <label className="block text-lg">
        <Input placeholder="Username" />
        <Input placeholder="password" />
      </label>
      <div>
        <SubmitButton value="Login" />
      </div>
      <div>
        
          <p>Don't have an account yet?</p>
        
      </div>
    </form>
  );
}

function LogoutButton() {
  return (
    <form action={logout} className={css.form}>
      <div>
        <SubmitButton value="Logout" />
      </div>
    </form>
  );
}