import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";

export function ContactMe() {
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Something went wrong 😢");
      });
  }

  return (
    <section className={styles.hire}>
      <h2>Contact Me</h2>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />

        <textarea
          name="message"
          placeholder="Tell me about your project, or ask me anything..."
          rows={5}
          required
        />

        <button type="submit">Send message</button>
      </form>
    </section>
  );
}