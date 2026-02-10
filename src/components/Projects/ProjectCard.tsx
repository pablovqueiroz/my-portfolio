import type { ProjectCardProps } from "../../types/Project";
import styles from "./ProjectCard.module.css";


export function ProjectCard({
    title,
    description,
    techs,
    githubUrl,
    logo,
    demoVideo,
    liveUrl
}: ProjectCardProps) {
    const getYoutubeEmbedUrl = (url?: string) => {
        const videoIdMatch = url.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
        );

        return videoIdMatch
            ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
            : "";
    };

    const youtubeEmbedUrl = getYoutubeEmbedUrl(demoVideo);
    if (!youtubeEmbedUrl) {
        return null; // ou um placeholder simples
    }
    return (
        <article className={styles.card}>
            <div className={styles.media}>
                <iframe
                    src={`${youtubeEmbedUrl}?rel=0&modestbranding=1`}
                    title={`${title} demo`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className={styles.content}>

                <header className={styles.header}>
                    <img
                        src={logo}
                        alt={`${title} logo`}
                        className={styles.logo}
                    />
                    <h3 className={styles.title}>{title}</h3>
                </header>
                <p className={styles.description}>{description}</p>

                <ul className={styles.techs}>
                    {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className={styles.links}>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <strong>
                            GitHub
                        </strong>
                    </a>

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryLink}
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}