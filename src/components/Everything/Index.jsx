import Boyd from "../../assets/imgs/Boydsuit.jpeg";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const LINKS = [
  {
    label: "Portfolio",
    subtitle: "Selected builds and recent frontend work",
    href: "https://coleyrockin.github.io/react-portfolio/",
    icon: FaGlobe,
    accent: "#00c2a8",
    type: "Primary",
  },
  {
    label: "LinkedIn",
    subtitle: "Professional profile and work history",
    href: "https://www.linkedin.com/in/boydcroberts/",
    icon: FaLinkedin,
    accent: "#2867b2",
    type: "Profile",
  },
  {
    label: "GitHub",
    subtitle: "Code, experiments, and shipped projects",
    href: "https://github.com/coleyrockin",
    icon: FaGithub,
    accent: "#111111",
    type: "Code",
  },
  {
    label: "Instagram",
    subtitle: "Creative updates and public work",
    href: "https://www.instagram.com/coleyrockin/",
    icon: FaInstagram,
    accent: "#f04f7a",
    type: "Social",
  },
  {
    label: "Email",
    subtitle: "Start a project or send an opportunity",
    href: "mailto:boydcroberts@gmail.com",
    icon: FaEnvelope,
    accent: "#f2b705",
    type: "Contact",
  },
];

function Everything() {
  return (
    <section className="linkx-layout" aria-labelledby="profile-title">
      <div className="portrait-panel">
        <img src={Boyd} alt="Boyd Roberts in a suit" className="profile-image" />
        <div className="availability" aria-label="Availability status">
          <span className="status-dot" />
          Open to strong software opportunities
        </div>
      </div>

      <div className="content-panel">
        <p className="eyebrow">Linkx / Boyd Roberts</p>
        <h1 id="profile-title" className="profile-name">
          Full-stack developer building practical, polished web products.
        </h1>
        <p className="profile-copy">
          React, JavaScript, product thinking, and clean UI engineering. Start with the portfolio,
          then jump into code or professional history.
        </p>

        <ul className="link-list" aria-label="Boyd Roberts links">
          {LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <li
                key={link.label}
                className="link-item"
                style={{
                  "--accent": link.accent,
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-button">
                  <span className="link-main">
                    <span className="link-icon-wrap" aria-hidden="true">
                      <Icon className="link-icon" />
                    </span>
                    <span>
                      <span className="link-label">{link.label}</span>
                      <span className="link-subtitle">{link.subtitle}</span>
                    </span>
                  </span>
                  <span className="link-action">
                    <span>{link.type}</span>
                    <FaExternalLinkAlt className="external-icon" aria-hidden="true" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Everything;
