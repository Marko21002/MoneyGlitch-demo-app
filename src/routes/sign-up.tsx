import { SignUp } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up")({
  component: () => (
    <SignUp fallbackRedirectUrl="/dashboard" signInUrl="/sign-in" />
  ),
});
