import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <nav className={styles.navbar}>
    <Link href="/">
      <a className={styles.navbar_brand}>Note App</a>
    </Link>
    <Link href="/new">
      <a className={styles.navbar_create}>Create note</a>
    </Link>
  </nav>
);

export default NavBar;
