import styles from "./Footer.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <footer className={styles.footer}>

            <section className={styles.socials}>
                <a
                    href="https://github.com/pablovqueiroz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <AiFillGithub className={styles.icon} />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/pablo-queiroz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <AiFillLinkedin className={styles.icon} />
                    <span>LinkedIn</span>
                </a>
            </section>

            <p className={styles.copy}>
                © {new Date().getFullYear()} — Pablo Queiroz
            </p>
        </footer>
    )
}

export default Footer