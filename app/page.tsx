// import { Metadata } from "next";
import Link from "next/link";
import { Form } from "./form";
import { Suspense } from "react";



// export const metadata: Metadata = {
//   title: "🛠 iron-session examples: Server components, and server actions",
// };

export default async function AppRouter() {
  return (
    <main className="p-10 space-y-5">
      <div className="grid grid-cols-1 gap-4 p-10 border border-slate-500 rounded-md max-w-xl">
        <Suspense fallback={<p className="text-lg">Loading...</p>}>
          <Form />
        </Suspense>
      </div>
    </main>
  );
}
