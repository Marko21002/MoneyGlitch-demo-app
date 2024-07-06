import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export const Route = createFileRoute("/_creator")({
  component: () => (
    <div>
      <Outlet></Outlet>
    </div>
  ),
});

function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-medium">MoneyGlitch</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              to="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/posts"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Posts
            </Link>
            <Link
              to="/settings"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Settings
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden w-[150px] lg:flex">
        <Link to="/" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="font-medium">MoneyGlitch</span>
        </Link>
      </div>
      <div className="ml-auto hidden gap-4 lg:flex">
        <Link
          to="/about"
          className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
        >
          Home
        </Link>
        <Link
          to="/posts"
          className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
        >
          Posts
        </Link>
        <Link
          to="/settings"
          className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
        >
          Settings
        </Link>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
