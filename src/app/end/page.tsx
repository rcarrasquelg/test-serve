import Link from "next/link";

export default function End() {
  return (
    <main>
      <h1>End Page</h1>
      <Link href="/about">
        <h1>Next step</h1>
      </Link>
    </main>
  );
}
