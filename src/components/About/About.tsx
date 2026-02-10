import styles from "./About.module.css"

function About() {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>About Me</h2>

            <p className={styles.text}>
                I am a Full Stack Web Developer recently graduated from an intensive
                bootcamp at Ironhack, where I built full-cycle web applications using
                the MERN stack.
            </p>

            <p className={styles.text}>
                I combine my technical training with over 15 years of professional
                experience in project support and process organization, bringing
                structure, clarity, and a strong problem-solving mindset to software
                development.
            </p>

            <p className={styles.text}>
                My transition into tech is driven by a long-standing interest in
                automation and system efficiency. I focus on writing clean, functional,
                and scalable code that bridges business needs and technical execution.
            </p>
        </section>
    )
}

export default About