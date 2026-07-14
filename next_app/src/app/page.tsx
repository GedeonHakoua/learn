import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={"/hero.svg"} alt="Hero-contact"
        width={200}
        height={200}
      />
      <h1>Bienvenue dans NextJs</h1>

      <Link href="/contacts" className="btn-link">
        Visiter notre application
        </Link>
    </div>
  );
}
