import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/_consumer/settings")({
  component: () => (
    <div>
      <Settings></Settings>
    </div>
  ),
});

function Settings() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Settings</h1>
          <div className="grid gap-6 py-8">
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>
                  View your subscription details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Expiration Date</span>
                    <span className="font-medium">2024-07-31</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button variant="outline">Manage Billing</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
