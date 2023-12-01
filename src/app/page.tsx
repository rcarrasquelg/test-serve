import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/about">
          <h1>Next step</h1>
        </Link>
      </div>
    </main>
  );
}
