import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate({ to })}
      routerReplace={(to) => navigate({ to, replace: true })}
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Outlet />
        <TanStackRouterDevtools position="top-right" initialIsOpen={false} />
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
