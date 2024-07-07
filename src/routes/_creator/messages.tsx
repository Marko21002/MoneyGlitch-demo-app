import { Link, createFileRoute } from "@tanstack/react-router";
import { SetStateAction, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
export const Route = createFileRoute("/_creator/messages")({
  component: () => (
    <div>
      <Component></Component>
    </div>
  ),
});

function Component() {
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const handleReply = (message: SetStateAction<string>) => {
    setReplyMessage(message);
    setReplyDialogOpen(true);
  };
  const handleSendReply = () => {
    console.log("Sending reply:", replyMessage);
    setReplyDialogOpen(false);
    setReplyMessage("");
  };
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between mb-6">
        <Link
          to="/creatorpage"
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold">Your Messages</h1>
      </header>
      <div className="space-y-4">
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Olivia Davis</div>
                <div className="text-xs text-muted-foreground">Oct 8, 2023</div>
              </div>
              <div className="text-sm text-muted-foreground">
                olivia.davis@example.com
              </div>
              <div className="mt-2 text-sm">
                Hi there, I wanted to follow up on our previous conversation
                about the project timeline. I have a few updates I'd like to
                discuss with you. When would be a good time to chat?
              </div>
              <div className="mt-4">
                <Button
                  onClick={() =>
                    handleReply(
                      "Hi Olivia, I'm available to chat tomorrow at 2pm. Looking forward to discussing the updates."
                    )
                  }
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">John Smith</div>
                <div className="text-xs text-muted-foreground">
                  Sep 25, 2023
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                john.smith@example.com
              </div>
              <div className="mt-2 text-sm">
                Hey, I wanted to touch base about the new feature we discussed
                last week. I have a few ideas I'd like to run by you. Let me
                know if you have time for a quick call.
              </div>
              <div className="mt-4">
                <Button
                  onClick={() =>
                    handleReply(
                      "Hi John, I'm available for a call tomorrow at 4pm. Looking forward to discussing your ideas."
                    )
                  }
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Emily Chen</div>
                <div className="text-xs text-muted-foreground">
                  Aug 12, 2023
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                emily.chen@example.com
              </div>
              <div className="mt-2 text-sm">
                Hi, I wanted to follow up on the design feedback you provided.
                I've made the updates we discussed and would love to get your
                thoughts on the new version.
              </div>
              <div className="mt-4">
                <Button
                  onClick={() =>
                    handleReply(
                      "Hi Emily, I'd be happy to take a look at the updated design. Can we schedule a quick call for tomorrow afternoon?"
                    )
                  }
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reply to message</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Write your reply..."
              className="p-4 min-h-[200px]"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSendReply}>Send</Button>
            <div>
              <Button variant="outline">Cancel</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
