import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h3>About</h3>
        <p>Frontend-leaning full-stack developer — performance, accessibility, and shipping real products.</p>
        <div className={styles.contacts}>
          <a href="mailto:samuelj1323@gmail.com">samuelj1323@gmail.com</a>
          <a href="https://github.com/samuelj1323" target="_blank" rel="noreferrer">
            github.com/samuelj1323
          </a>
          <a href="https://linkedin.com/in/samuel-mahan" target="_blank" rel="noreferrer">
            linkedin.com/in/samuel-mahan
          </a>
        </div>
      </header>

      <section className={styles.section}>
        <h4>Background</h4>
        <p>
          I'm Samuel Mahan — a Texas A&M CS grad currently building at JPMorgan Chase. I work across the
          stack but lean frontend: React, Svelte, TypeScript, and the tooling that makes teams move fast
          without breaking things.
        </p>
        <p>
          Recent focus: micro-frontend architecture (adopted across 10+ apps), design-system components
          (ADA-compliant, used across 50+ apps), and agent tooling that lets an LLM drive real UI flows
          via schema-validated tools.
        </p>
      </section>

      <section className={styles.section}>
        <h4>How I work</h4>
        <ul className={styles.list}>
          <li>TypeScript-first — reduce defects before they ship.</li>
          <li>Performance as a feature — 3x faster loads via critical CSS and resource standardization.</li>
          <li>Accessibility by default — semantic HTML, keyboard nav, screen-reader tested.</li>
          <li>Small, reversible changes — mentorship and onboarding baked in.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4>Outside code</h4>
        <p>
          I build side projects to learn in public — FairShares (AI bill-splitting, 50+ beta users), Warble
          (personal Whisper fine-tuning, on-device inference). When not coding, you'll find me exploring
          Godot, diffusion models, or refining local AI dictation workflows.
        </p>
      </section>

      <section className={styles.section}>
        <h4>Colophon</h4>
        <p className={styles.colophon}>
          This site: React 19 + Vite 8 + Ubuntu + <span>— built in the open. Source on GitHub.</span>
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
