import Link from "next/link";

// Render this page on the server for every request, not once at build time.
export const dynamic = "force-dynamic";

export default function Home() {
  const renderedAt = new Date().toISOString();

  return (
    <main className="mx-auto max-w-xl p-8 space-y-4">
      <h1 className="text-3xl font-bold">Hello from Next.js on Light Cloud</h1>
      <p>
        This page was rendered on the server at{" "}
        <time className="font-mono">{renderedAt}</time>. Reload it and the time changes.
      </p>
      <p>
        <Link className="underline" href="/about">About</Link> is built once, at deploy time.{" "}
        <Link className="underline" href="/api/time">/api/time</Link> is a route handler.
      </p>
    </main>
  );
}
