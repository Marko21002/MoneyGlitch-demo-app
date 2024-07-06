import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/creators")({
  component: () => (
    <div>
      <Listing></Listing>
    </div>
  ),
});

function Listing() {
  return (
    <div className="min-h-screen w-full bg-background">
      <header className="sticky top-0 z-10 bg-background py-4 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for traders..."
              className="w-full rounded-lg bg-muted py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
            Crypto
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
            Forex
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
            Signals
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
            Analytics
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="rounded-lg bg-card p-4 shadow-md">
            <div className="mb-4 flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Crypto, Signals</p>
              </div>
            </div>
            <p className="mb-4 text-sm">
              John is a seasoned trader with a focus on cryptocurrency and
              trading signals. He has a proven track record of successful trades
              and provides valuable insights to his followers.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Visit Blog
            </Link>
          </Card>
          <Card className="rounded-lg bg-card p-4 shadow-md">
            <div className="mb-4 flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sarah Anderson</h3>
                <p className="text-sm text-muted-foreground">
                  Forex, Analytics
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm">
              Sarah is a forex trading expert with a deep understanding of
              market analysis and data-driven strategies. She provides
              comprehensive analytics and insights to help her followers make
              informed trading decisions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Visit Blog
            </Link>
          </Card>
          <Card className="rounded-lg bg-card p-4 shadow-md">
            <div className="mb-4 flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                <p className="text-sm text-muted-foreground">
                  Crypto, Forex, Signals
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm">
              Michael is a versatile trader with expertise in cryptocurrency,
              forex, and trading signals. He provides a comprehensive approach
              to trading, combining technical analysis, market insights, and
              effective trading strategies.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Visit Blog
            </Link>
          </Card>
          <Card className="rounded-lg bg-card p-4 shadow-md">
            <div className="mb-4 flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Emily Wilson</h3>
                <p className="text-sm text-muted-foreground">
                  Signals, Analytics
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm">
              Emily is a trading signals expert with a deep understanding of
              market trends and data analysis. She provides her followers with
              accurate and timely trading signals, as well as in-depth market
              analytics to support their trading decisions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Visit Blog
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
