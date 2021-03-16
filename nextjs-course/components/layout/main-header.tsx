import Link from "next/link";
import styles from "../../styles/main-header.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <title>Events</title>
      <link rel="icon" href="/favicon.ico" />
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
