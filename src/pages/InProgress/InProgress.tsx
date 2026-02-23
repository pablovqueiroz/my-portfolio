import { AiFillGithub } from "react-icons/ai";
import styles from "./InProgress.module.css";

const InProgress: React.FC = () => {

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* Header */}
                <section className={styles.section}>
                    <h1 className={styles.title}>
                        Finance Tracker <span className={styles.highlight}>(In Progress)</span>
                    </h1>
                    <section className={styles.socials}>
                        <a
                            href="https://github.com/pablovqueiroz/finance-tracker-pern-server"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <AiFillGithub className={styles.icon} />
                            <span>Backend Repository</span>
                        </a>
                        <a
                            href="https://github.com/pablovqueiroz/finance-tracker-pern-client"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <AiFillGithub className={styles.icon} />
                            <span>Frontend Repository</span>
                        </a>
                    </section>
                    <p className={styles.description}>
                        Finance Tracker is a full-stack PERN application (PostgreSQL, Express,
                        React, Node.js) focused on personal finance management, built with
                        clean architecture principles, strong typing, and secure backend practices.
                    </p>
                </section>


                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Backend Code Overview</h2>

                    <div className={styles.videoWrapper}>
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/3wCDxrulfT8"
                            title="Finance Tracker Backend Code Overview"
                            frameBorder="0"
                            allowFullScreen
                            className={styles.video}
                        />
                    </div>
                </section>

                <div className={styles.listsContainer}>
                    {/* Tech Stack */}
                    <section className={styles.section}>
                        <h2 className={styles.subtitle}>Tech Stack</h2>
                        <ul className={styles.list}>
                            <li>React + TypeScript (SPA)</li>
                            <li>Express + TypeScript</li>
                            <li>PostgreSQL + Prisma ORM</li>
                            <li>JWT Authentication + Google OAuth</li>
                            <li>Helmet + Rate Limiting</li>
                        </ul>
                    </section>

                    {/* Features */}
                    <section className={styles.section}>
                        <h2 className={styles.subtitle}>Current Features</h2>
                        <ul className={styles.list}>
                            <li>Secure JWT authentication</li>
                            <li>Account and member management</li>
                            <li>Income & expense transactions</li>
                            <li>Savings goals tracking</li>
                            <li>Invite system for shared accounts</li>
                            <li>Audit log system</li>
                            <li>Full CRUD REST API</li>
                        </ul>
                    </section>
                </div>

                {/* Architecture */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Architecture</h2>
                    <p className={styles.description}>
                        The backend follows a structured architecture with separated routes
                        and controllers, Prisma data modeling, and strong TypeScript typing.
                        The frontend is a mobile-first SPA consuming a RESTful API with
                        full CRUD flows.
                    </p>
                </section>

                {/* Backlog */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Work in Progress</h2>
                    <ul className={styles.list}>
                        <li>Advanced financial insights & category charts</li>
                        <li>Improved savings goal progress visualization</li>
                        <li>Dashboard UX refinements</li>
                        <li>Performance optimization</li>
                        <li>Production deployment polish</li>
                    </ul>
                </section>

                {/* Footer */}
                <section className={styles.section}>
                    <p className={styles.footer}>
                        This project demonstrates working proficiency in modern full-stack
                        development using React, TypeScript, Express, and Prisma.
                    </p>
                    <p className={styles.footer}>
                        Disclaimer: Finance Tracker is a non-commercial project created for educational and demonstration purposes only. It does not provide financial advice and is not intended for real-world financial decision-making.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default InProgress;