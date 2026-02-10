import { NavLink, type NavLinkProps } from "react-router-dom"
import styles from "./NavItem.module.css"

type NavItemProps = NavLinkProps & {
  label: string
}

function NavItem({ label, ...props }: NavItemProps) {
  return (
    <li>
      <NavLink
        {...props}
        className={({ isActive }) =>
          isActive
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

export default NavItem