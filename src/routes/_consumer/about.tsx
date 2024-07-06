import { createFileRoute } from "@tanstack/react-router";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_consumer/about")({
  component: () => (
    <div>
      <About></About>
    </div>
  ),
});

function About() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 md:py-16 lg:py-20">
      <Avatar className="h-32 w-32 border-4 border-primary">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          John Doe, Experienced Trader
        </h1>
        <p className="mt-4 text-muted-foreground">
          John Doe is a seasoned trader with over 15 years of experience in the
          financial markets. He has a deep understanding of technical and
          fundamental analysis, and his trading philosophy is centered around
          disciplined risk management and a long-term, value-oriented approach.
          John is passionate about sharing his knowledge and helping others
          achieve their financial goals.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <MailIcon className="h-6 w-6" />
            <span className="sr-only">Gmail</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <TextIcon className="h-6 w-6" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Contact</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact John Doe</DialogTitle>
                <DialogDescription>
                  Fill out the form below to get in touch with John.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="message" className="text-right">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="col-span-3 min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Send Message</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TextIcon(props) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
