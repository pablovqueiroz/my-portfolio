import { FiDownload, FiExternalLink } from "react-icons/fi"
import { FaFilePdf } from "react-icons/fa"
import styles from "./CVSection.module.css"

type CV = {
  label: string
  file: string
  language: "pt" | "en"
}

const cvs: CV[] = [
    {
      label: "English",
      file: "/pablo_queiroz_cv_en.pdf",
      language: "en",
    },
  {
    label: "Português",
    file: "/pablo_queiroz_cv_pt.pdf",
    language: "pt",
  },
]

export function CVSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Curriculum</h2>

      {cvs.map((cv) => (
        <div key={cv.language} className={styles.group}>
          <h3 className={styles.language}>
            <FaFilePdf className={styles.iconPdf} />
            {cv.label}
          </h3>

          <div className={styles.buttons}>
            <a href={cv.file} download className={styles.primary}>
              <FiDownload className={styles.icon} />
              Download
            </a>

            <a
              href={cv.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <FiExternalLink className={styles.icon} />
              Preview
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}