import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// import { Link } from "@tanstack/react-router";
import { ResponsiveLine } from "@nivo/line";
import { Button } from "@/components/ui/button";
import { ClassAttributes, HTMLAttributes, SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import { useAction, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const Route = createFileRoute("/_consumer/posts")({
  component: () => (
    <div>
      <Page></Page>
    </div>
  ),
});

function Page() {
  const user = useQuery(api.users.getUser);
  const isSubscribed = user && (user.endsOn ?? 0) > Date.now();

  if (!user) {
    return null;
  }
  return <div>{isSubscribed ? <Posts /> : <Blured />}</div>;
}

function Posts() {
  const posts = useQuery(api.posts.get);

  return (
    <div className="flex min-h-screen justify-center bg-background">
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 p-4">
        {posts
          ? posts.map((post) => (
              <Card
                key={post._id}
                className="group relative mx-auto w-[95%] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl md:w-[80%]"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-medium">{post.assetName}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ArrowUpIcon className="h-4 w-4 text-green-500" />
                      <span>
                        +
                        {(
                          ((post.exitPrice - post.entryPrice) /
                            post.entryPrice) *
                          100
                        ).toFixed(2)}
                        %
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Entry Price
                      </p>
                      <p className="text-lg font-medium">${post.entryPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Exit Price
                      </p>
                      <p className="text-lg font-medium">${post.exitPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Stop-Loss</p>
                      <p className="text-lg font-medium">
                        ${post.stopLossPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Profit</p>
                      <p className="text-lg font-medium">
                        ${(post.exitPrice - post.entryPrice).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="aspect-[4/3] w-full">
                    <LineChart className="h-full w-full" />
                  </div>
                </CardContent>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
}

function Blured() {
  const pay = useAction(api.stripe.pay);

  async function handleSubscribeClick() {
    const url = await pay();
    window.location.href = url;
  }
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center blur-2xl filter" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <Card className="w-full max-w-md bg-background p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Monthly Subscription
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Get access to this content
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">$10</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              {/* <Link
                href="https://buy.stripe.com/test_3cs2ah7W29VO25ieUV"
                target="_blank"
              > */}

              <Button
                onClick={handleSubscribeClick}
                size="lg"
                className="w-full max-w-[150px]"
              >
                Subscribe
              </Button>
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Unlimited access</span>
                <CheckIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Ad-free experience</span>
                <CheckIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Priority support</span>
                <CheckIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function LineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

// function TimeseriesChart(
//   props: JSX.IntrinsicAttributes &
//     ClassAttributes<HTMLDivElement> &
//     HTMLAttributes<HTMLDivElement>
// ) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "2018-01-01", y: 7 },
//               { x: "2018-01-02", y: 5 },
//               { x: "2018-01-03", y: 11 },
//               { x: "2018-01-04", y: 9 },
//               { x: "2018-01-05", y: 12 },
//               { x: "2018-01-06", y: 16 },
//               { x: "2018-01-07", y: 13 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "2018-01-01", y: 9 },
//               { x: "2018-01-02", y: 8 },
//               { x: "2018-01-03", y: 13 },
//               { x: "2018-01-04", y: 6 },
//               { x: "2018-01-05", y: 8 },
//               { x: "2018-01-06", y: 14 },
//               { x: "2018-01-07", y: 11 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
//         xScale={{
//           type: "time",
//           format: "%Y-%m-%d",
//           useUTC: false,
//           precision: "day",
//         }}
//         xFormat="time:%Y-%m-%d"
//         yScale={{
//           type: "linear",
//           min: 0,
//           max: "auto",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//           format: "%d",
//           tickValues: "every 1 day",
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }
