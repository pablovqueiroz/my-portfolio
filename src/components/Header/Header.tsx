import styles from "./Header.module.css"
import NavItem from "../NavItem/NavItem"

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavItem to="/" label="Home" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/hire-me" label="Contact me" />
        </ul>
      </nav>
    </header>
  )
}

export default Header