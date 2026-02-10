import styles from "./Hero.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Pablo Queiroz</h1>

        <h2 className={styles.subtitle}>
          Full Stack Web Developer focused on building clean, functional web applications.
        </h2>

        <p className={styles.description}>
          Full Stack Web Developer recently graduated from an intensive bootcamp at Ironhack,
          where I built full-cycle web applications using the MERN stack.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/profile/profile.jpg"
          alt="Portrait of Pablo Queiroz"
          className={styles.image}
          loading="lazy"
        />

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
      </div>
    </section>
  );
}

export default Hero;