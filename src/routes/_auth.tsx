import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { Authenticated, Unauthenticated } from "convex/react";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <Unauthenticated>
        <Navigate to="/sign-in" />
      </Unauthenticated>
      <Authenticated>
        <Outlet />
      </Authenticated>
    </>
  );
}
