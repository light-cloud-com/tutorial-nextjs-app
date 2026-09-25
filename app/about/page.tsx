import Link from "next/link";

// No dynamic data here, so Next.js renders this page once, during `next build`.
export default function About() {
  const builtAt = new Date().toISOString();

  return (
    <main className="mx-auto max-w-xl p-8 space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p>
        This page was prerendered at build time, at{" "}
        <time className="font-mono">{builtAt}</time>. Reloading does not change it.
      </p>
      <p>
        <Link className="underline" href="/">Home</Link>
      </p>
    </main>
  );
}
