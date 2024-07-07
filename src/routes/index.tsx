import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
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
        <BlurIn
          word="Welcome to MoneyGlitch"
          className="text-4xl font-bold text-black dark:text-white"
        />
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
            <TypingAnimation
              className="text-4xl font-bold text-black dark:text-white"
              text="Choose Your Path"
            />
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
