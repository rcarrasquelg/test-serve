import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About page</h1>
      <Link href="/about">
        <h1>Next step</h1>
      </Link>
    </main>
  );
}
