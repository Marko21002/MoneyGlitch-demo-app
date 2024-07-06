import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <IndexPage />,
});

function IndexPage() {
  return (
    <div className="p-4">
      <SignedIn>
        <Choose></Choose>
      </SignedIn>
      <SignedOut>
        <Welcome></Welcome>
      </SignedOut>
    </div>
  );
}

function Welcome() {
  return (
    <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="animate-reveal text-foreground text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Welcome to MoneyGlitch
        </h1>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </div>
    </div>
  );
}

function Choose() {
  return (
    <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-2xl">
        <div className="grid gap-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose Your Path
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Are you a content creator or a consumer?
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link to="/creatorpage" className="block">
              <Button className="w-full text-xl">Content Creator</Button>
            </Link>
            <Link to="/creators" className="block">
              <Button className="w-full text-xl">Consumer</Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <SignOutButton>
              <Button className="mt-4 text-lg">Sign Out</Button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </div>
  );
}
