import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  Presentation,
  Sparkles,
  UserRound,
  X
} from "lucide-react";
import "./styles.css";

const skills = [
  { name: "PowerPoint", value: 90, icon: Presentation, text: "Presentations • Reports • Business slides" },
  { name: "MS Excel", value: 85, icon: FileSpreadsheet, text: "Data entry • Formulas • Analysis • Reports" },
  { name: "CA / Accounting", value: 80, icon: Calculator, text: "Tally • Accounting • Financial reports" }
];

const projects = [
  {
    title: "Excel Financial Analysis",
    tag: "MS Excel",
    text: "Financial reports, data analysis, formulas and charts prepared using Microsoft Excel.",
    icon: FileSpreadsheet
  },
  {
    title: "Professional Presentation",
    tag: "PowerPoint",
    text: "Clean academic and business presentation layouts designed with PowerPoint.",
    icon: Presentation
  },
  {
    title: "Accounting & CA Work",
    tag: "Accounting",
    text: "Accounting-oriented work including ledger, journal, balance-sheet and basic financial tasks.",
    icon: Calculator
  }
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "show" : ""} ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className={`loader ${loaded ? "loader-hide" : ""}`}>
        <div className="loader-mark">LK</div>
        <div className="loader-line"><span /></div>
        <p>LOADING PROFILE</p>
      </div>

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">LK</span>
          <span>Lingesh Kumar</span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "education", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-resume" href="#contact" onClick={closeMenu}>
            <Download size={15} /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-noise" />
          <div className="gold-orb orb-one" />
          <div className="gold-orb orb-two" />

          <div className="hero-copy">
            <div className="eyebrow reveal show">
              <Sparkles size={15} /> B.COM CA GRADUATE
            </div>

            <h1 className="hero-title reveal show">
              <span className="small-title">HELLO, I'M</span>
              <span>Lingesh <em>Kumar</em></span>
            </h1>

            <p className="handwrite reveal show">Accounting today&nbsp; / &nbsp;Better opportunities tomorrow</p>

            <p className="hero-description reveal show">
              A dedicated B.Com CA graduate with a strong foundation in accounting,
              finance and office productivity tools. Focused on accurate work,
              professional presentation and continuous learning.
            </p>

            <div className="hero-actions reveal show">
              <a className="btn btn-gold" href="#contact"><MessageCircle size={17} /> Contact Me</a>
              <a className="btn btn-outline" href="#projects"><ArrowDown size={17} /> Explore Work</a>
            </div>

            <div className="social-row reveal show">
              <a href="#contact" aria-label="Email"><Mail size={18} /></a>
              <a href="#contact" aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href="#skills" aria-label="Skills"><BriefcaseBusiness size={18} /></a>
            </div>
          </div>

          <div className="hero-photo-wrap reveal show">
            <div className="photo-glow" />
            <div className="photo-ring" />
            <img src="/lingesh-portrait.png" alt="Lingesh Kumar" className="hero-photo" />
            <div className="floating-note">Dream<br />Learn<br /><b>Achieve</b></div>
          </div>

          <a className="scroll-cue" href="#about"><span>SCROLL</span><ArrowDown size={16} /></a>
        </section>

        <section id="about" className="section split-section">
          <Reveal className="section-intro">
            <span className="section-kicker"><UserRound size={16} /> ABOUT</span>
            <h2>Professional,<br /><span>precise &amp; ready.</span></h2>
            <p>
              I have completed my B.Com CA and enjoy working with accounting,
              data handling and presentation tools. I value accuracy, organized
              work and a professional approach to every task.
            </p>
          </Reveal>

          <Reveal className="about-card">
            <div className="about-top">
              <div className="mini-avatar"><img src="/lingesh-portrait.png" alt="" /></div>
              <div>
                <span className="muted">PROFILE</span>
                <h3>Lingesh Kumar</h3>
              </div>
              <CheckCircle2 className="verified" size={22} />
            </div>
            <div className="about-facts">
              <div><GraduationCap /><span><small>Qualification</small>B.Com CA</span></div>
              <div><BriefcaseBusiness /><span><small>Focus</small>Accounting &amp; Office Tools</span></div>
              <div><Sparkles /><span><small>Approach</small>Accurate &amp; Responsible</span></div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="section dark-section">
          <Reveal className="section-heading">
            <span className="section-kicker"><BriefcaseBusiness size={16} /> SKILLS</span>
            <h2>Tools I work <span>with.</span></h2>
          </Reveal>

          <div className="skill-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.name} className="skill-card" style={{ "--delay": `${index * 90}ms` }}>
                  <div className="skill-icon"><Icon size={28} /></div>
                  <div className="skill-card-head">
                    <h3>{skill.name}</h3>
                    <span>{skill.value}%</span>
                  </div>
                  <p>{skill.text}</p>
                  <div className="progress"><span style={{ width: `${skill.value}%` }} /></div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="education" className="section education-section">
          <Reveal className="education-box">
            <div className="education-icon"><GraduationCap size={34} /></div>
            <div>
              <span className="section-kicker">EDUCATION</span>
              <h2>B.Com CA</h2>
              <p>Commerce with Computer Applications • Graduated</p>
            </div>
            <div className="education-badge">GRADUATE</div>
          </Reveal>
        </section>

        <section id="projects" className="section projects-section">
          <Reveal className="section-heading">
            <span className="section-kicker"><Sparkles size={16} /> WORK</span>
            <h2>Selected <span>work.</span></h2>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.title} className="project-card" style={{ "--delay": `${index * 100}ms` }}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-icon"><Icon size={25} /></div>
                  <div className="project-content">
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <a href="#contact">Discuss work <ArrowUpRight size={16} /></a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal className="contact-box">
            <div>
              <span className="section-kicker"><Mail size={16} /> CONTACT</span>
              <h2>Let's build the<br /><span>next opportunity.</span></h2>
              <p>Replace the placeholder contact details below with Lingesh's real details before publishing.</p>
            </div>
            <div className="contact-details">
              <a href="mailto:your-email@example.com"><Mail /> your-email@example.com</a>
              <a href="tel:+910000000000"><MessageCircle /> +91 XXXXXXXXXX</a>
              <a href="#home"><ArrowUpRight /> Coimbatore, India</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Lingesh Kumar</span>
        <span>B.Com CA • Accounting • Office Tools</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
