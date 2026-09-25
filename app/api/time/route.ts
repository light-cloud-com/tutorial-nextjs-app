// A route handler: an API endpoint that lives next to the pages.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    now: new Date().toISOString(),
    node: process.version,
  });
}
