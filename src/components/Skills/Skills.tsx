import styles from "./Skills.module.css"

function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Tech Stack</h2>

            <div className={styles.grid}>
                <div className={styles.group}>
                    <h3>Frontend</h3>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div className={styles.group}>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className={styles.group}>
                    <h3>Database</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL (relational databases, basic SQL)</li>
                    </ul>
                </div>

                <div className={styles.group}>
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills