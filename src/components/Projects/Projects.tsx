import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { useRef, useState } from "react";
import projectsData from "../../data/projects.json";
import type { Project } from "../../types/Project";

const projects = projectsData as Project[];


export function Projects() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = projects.length;

    function scrollToIndex(index: number) {
        if (!carouselRef.current) return;

        const width = carouselRef.current.clientWidth;

        carouselRef.current.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    }

    function handleNext() {
        const nextIndex = currentIndex + 1 >= totalCards ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
    }

    function handlePrev() {
        const prevIndex = currentIndex - 1 < 0 ? totalCards - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        scrollToIndex(prevIndex);
    }

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>My Work</h2>

            <div className={styles.wrapper}>
                <button
                    className={styles.arrow}
                    onClick={handlePrev}
                    aria-label="Scroll left"
                >
                    ←
                </button>

                <div className={styles.carousel} ref={carouselRef}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            logo={`/logos/${project.logo}`}
                            demoVideo={project.demoVideo}
                        />
                    ))}
                </div>

                <button
                    className={styles.arrow}
                    onClick={handleNext}
                    aria-label="Scroll right"
                >
                    →
                </button>
            </div>
        </section>
    );
}