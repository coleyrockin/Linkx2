import Boyd from "../../assets/imgs/Boydsuit.jpeg";

const LINKS = [
  {
    label: "Portfolio",
    subtitle: "Selected builds and recent frontend work.",
    href: "https://coleyrockin.github.io/react-portfolio/",
    type: "Primary",
  },
  {
    label: "LinkedIn",
    subtitle: "Professional profile and work history.",
    href: "https://www.linkedin.com/in/boydcroberts/",
    type: "Profile",
  },
  {
    label: "GitHub",
    subtitle: "Source code, experiments, and shipped projects.",
    href: "https://github.com/coleyrockin",
    type: "Code",
  },
  {
    label: "Instagram",
    subtitle: "Creative updates and public work.",
    href: "https://www.instagram.com/coleyrockin/",
    type: "Social",
  },
  {
    label: "Email",
    subtitle: "Start a project or send an opportunity.",
    href: "mailto:boydcroberts@gmail.com",
    type: "Contact",
  },
];

const ISSUE_DATE = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

function Everything() {
  return (
    <section className="folio" aria-labelledby="folio-title">
      <header className="masthead" aria-hidden="true">
        <span className="masthead-cell masthead-edition">№ 02 · Vol. Twenty-Six</span>
        <span className="masthead-cell masthead-title">Linkx</span>
        <span className="masthead-cell masthead-date">{ISSUE_DATE}</span>
      </header>

      <div className="folio-grid">
        <aside className="portrait" aria-label="Portrait of Boyd Roberts">
          <div className="portrait-frame">
            <span className="crop crop-tl" aria-hidden="true" />
            <span className="crop crop-tr" aria-hidden="true" />
            <span className="crop crop-bl" aria-hidden="true" />
            <span className="crop crop-br" aria-hidden="true" />
            <img src={Boyd} alt="Boyd Roberts in a suit" className="portrait-image" />
          </div>
          <figcaption className="portrait-caption">
            <span className="caption-line">Boyd Roberts</span>
            <span className="caption-meta">Full-Stack Developer · Texas</span>
          </figcaption>
        </aside>

        <article className="content">
          <p className="kicker">
            <span className="kicker-rule" aria-hidden="true" />
            Personal Index
          </p>

          <h1 id="folio-title" className="display">
            A directory of <em>work</em>, in&nbsp;five&nbsp;entries.
          </h1>

          <p className="lede">
            React, JavaScript, product thinking, and clean UI engineering.
            Start at the portfolio — then read the code or the résumé.
          </p>

          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Open to strong software opportunities
          </p>

          <ol className="entries" aria-label="Linked profiles and contact methods">
            {LINKS.map((link, index) => (
              <li key={link.label} className="entry" style={{ "--i": index }}>
                <a
                  className="entry-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="entry-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="entry-body">
                    <span className="entry-label">{link.label}</span>
                    <span className="entry-leader" aria-hidden="true" />
                    <span className="entry-tag">{link.type}</span>
                  </span>
                  <span className="entry-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="entry-desc">{link.subtitle}</span>
                </a>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <footer className="colophon" aria-hidden="true">
        <span>Set in Fraunces &amp; Work Sans</span>
        <span className="colophon-mark">◆</span>
        <span>Built with React + Vite · No tracking</span>
      </footer>
    </section>
  );
}

export default Everything;
