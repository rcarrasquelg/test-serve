import Link from "next/link";

export default function End() {
  return (
    <main>
      <h1>End Page</h1>
      <Link href="/">
        <h1>go home</h1>
      </Link>
    </main>
  );
}
