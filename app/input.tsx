// We're using a client component to show a loading state
"use client";

import * as css from "@/app/css";
import { useFormStatus } from "react-dom";

interface inputProps {
  placeholder: string;
}

export function Input({placeholder} : inputProps) {
  const { pending } = useFormStatus();
  
  return (
    <input
      type="text"
      disabled={pending}
      name="username"
      className={css.input}
      placeholder={placeholder}
      required
      // for demo purposes, disabling autocomplete 1password here
      autoComplete="off"
      data-1p-ignore
    />
  );
}