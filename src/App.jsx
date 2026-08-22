import { useEffect, useState } from "react";
import PORTFOLIO_DATA from "../js/data.js";

const data = PORTFOLIO_DATA;
const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function Icon({ name }) {
  return <i className={`fa-solid fa-${name}`} aria-hidden="true" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);
  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}><Icon name="code" />AZYRON-tech</a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle Menu"><Icon name={open ? "xmark" : "bars"} /></button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {[["home", "Home"], ["about", "About"], ["skills", "Skills"], ["qualification", "Education & Experience"], ["projects", "Projects"], ["team", "Team"], ["contact", "Contact"]].map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={closeMenu}>{label}</a></li>)}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  const words = ["Web Development", "UI/UX Design", "Scalable Solutions"];
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timer = setTimeout(() => {
      if (!deleting && visible === word.length) return setDeleting(true);
      if (deleting && visible === 0) { setDeleting(false); return setWordIndex((wordIndex + 1) % words.length); }
      setVisible(visible + (deleting ? -1 : 1));
    }, !deleting && visible === word.length ? 1800 : deleting ? 55 : 115);
    return () => clearTimeout(timer);
  }, [deleting, visible, wordIndex]);

  return <section id="home"><div className="container hero-wrapper"><div className="hero-content">
    <p className="hero-subtitle">Your trusted digital product team</p>
    <h1 className="hero-title">We build <span>digital products</span></h1>
    <h2 className="hero-title-typing">{words[wordIndex].substring(0, visible)}</h2>
    <p className="hero-desc">We are a focused team of developers and designers helping businesses turn ideas into fast, reliable, and user-friendly digital products. Choose us for clear communication, thoughtful design, scalable engineering, and dependable delivery from concept to launch.</p>
    <div className="hero-cta"><a href="#contact" className="btn btn-secondary btn-icon"><Icon name="paper-plane" /> Let's Talk</a></div>
    <div className="social-links"><span className="social-label">Connect:</span>{[["github", "github"], ["linkedin-in", "linkedin"], ["twitter", "twitter"], ["facebook-f", "facebook"]].map(([icon, label]) => <a key={label} href={data.profile.socials[label]} target="_blank" rel="noreferrer" className="social-icon" aria-label={`${label} profile`}><i className={`fa-brands fa-${icon}`} /></a>)}</div>
  </div></div></section>;
}

function About() { return <section id="about" className="reveal"><div className="container"><SectionHeader title="About Me" subtitle="A glimpse into who I am, my coding journey, and what drives my creative process." /><div className="about-wrapper"><div className="about-details"><h3>Who is Ayon Pal?</h3><p className="about-text">{data.about.journey}</p><p className="about-text"><strong>What I Enjoy:</strong> {data.about.workEnjoyed}</p><p className="about-text"><strong>Beyond Code:</strong> {data.about.hobbies}</p></div><div className="about-stats"><p>Over the last 3+ years, I have worked with multiple technologies, collaborating in teams and delivering projects that scale.</p><div className="stats-grid">{[["3+", "Years Exp"], ["15+", "Projects"], ["100%", "Happy Clients"]].map(([number, label]) => <div className="stat-card" key={label}><div className="stat-number">{number}</div><div className="stat-label">{label}</div></div>)}</div></div></div></div></section>; }

function SectionHeader({ title, subtitle }) { return <div className="section-header"><h2 className="section-title">{title}</h2><p className="section-subtitle">{subtitle}</p></div>; }

function Skills() { const groups=[["Frontend Development", "laptop-code", data.skills.frontend], ["Backend & Database", "server", data.skills.backend], ["Tools & Workflows", "toolbox", data.skills.tools]]; return <section id="skills" className="reveal"><div className="container"><SectionHeader title="My Skills" subtitle="A graphical breakdown of my core technical proficiencies across frontend, backend, and development tools." /><div className="skills-container">{groups.map(([title, icon, skills]) => <div className="skills-category" key={title}><h3 className="category-title"><Icon name={icon} /> {title}</h3><div className="skills-list">{skills.map(skill => <div className="skill-item" key={skill.name}><div className="skill-info"><span>{skill.name}</span><span>{skill.level}%</span></div><div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: `${skill.level}%` }} /></div></div>)}</div></div>)}</div></div></section>; }

function Qualification() { return <section id="qualification" className="reveal"><div className="container timeline-wrapper"><Timeline title="Education" icon="graduation-cap" items={data.education.map(item => ({ date: item.period, title: item.degree, subtitle: item.institution, description: `${item.result}. ${item.description}` }))} /><Timeline title="Experience" icon="briefcase" items={data.experience.map(item => ({ date: item.period, title: item.role, subtitle: item.company, description: item.description.join(" ") }))} /></div></section>; }
function Timeline({ title, icon, items }) { return <div><h2 className="timeline-column-title"><Icon name={icon} /> {title}</h2><div className="timeline">{items.map(item => <div className="timeline-item" key={`${item.title}-${item.date}`}><div className="timeline-dot" /><p className="timeline-date">{item.date}</p><h3 className="timeline-title">{item.title}</h3><p className="timeline-subtitle">{item.subtitle}</p><p className="timeline-desc">{item.description}</p></div>)}</div></div>; }

function Projects() { return <section id="projects" className="reveal"><div className="container"><SectionHeader title="My Projects" subtitle="Explore selected work, technical decisions, and product thinking." /><div className="projects-grid">{data.projects.map(project => <div className="project-card" key={project.id}><div className="project-img-wrapper"><img src={`/${project.image}`} alt={`${project.name} project interface`} /></div><div className="project-card-content"><div className="project-tags">{project.techStack.slice(0, 3).map(tech => <span className="project-tag" key={tech}>{tech}</span>)}</div><h3 className="project-name">{project.name}</h3><p className="project-short-desc">{project.shortDescription}</p><div className="project-footer"><a href={`?id=${project.id}`} className="btn btn-secondary btn-sm btn-icon">View Details <Icon name="arrow-right" /></a></div></div></div>)}</div></div></section>; }

function Team() { const members=[{name:"Ayon Pal",role:"Web Developer | UI/UX Designer",image:"/assets/images/profile1.png",bio:"Builds polished web experiences, scalable interfaces, and thoughtful product solutions.",quote:"Ayon turns complex ideas into clear, useful, and engaging digital experiences."},{name:"Sabbir Rahman",role:"Full Stack Developer",image:"/assets/images/sabbir.jpg",bio:"Leads product strategy, client communication, and full-stack development.",quote:"Sabbir ensures every project aligns with business goals and delivers measurable results."},{name:"Zahidul Islam",role:"Technical Lead",image:"/assets/images/zahid.png",bio:"Leads software architecture, backend, and mobile app development.",quote:"Zahid builds clean, scalable systems that power reliable products."}]; return <section id="team" className="reveal"><div className="container"><SectionHeader title="Meet The Team" subtitle="A focused team combining product thinking, technical craft, and reliable delivery." /><div className="team-grid">{members.map(member => <article className="team-card" key={member.name}><div className="team-photo-wrap"><img src={member.image} alt={member.name} className="team-photo" /></div><div className="team-card-content"><p className="team-role">{member.role}</p><h3 className="team-name">{member.name}</h3><p className="team-bio">{member.bio}</p><blockquote>"{member.quote}"</blockquote><div className="team-actions"><a href="/assets/resume.pdf" download="Ayon_Pal_Resume.pdf" className="btn btn-primary btn-sm btn-icon"><Icon name="file-arrow-down" /> Download Resume</a><a href="#contact" className="btn btn-secondary btn-sm btn-icon"><Icon name="paper-plane" /> Let's Talk</a></div><div className="team-social-links"><span>Connect:</span>{[["github", "github"], ["linkedin-in", "linkedin"], ["twitter", "twitter"], ["facebook-f", "facebook"]].map(([icon, label]) => <a key={label} href={data.profile.socials[label]} target="_blank" rel="noreferrer" aria-label={`${label} profile`}><i className={`fa-brands fa-${icon}`} /></a>)}</div></div></article>)}</div></div></section>; }

function Contact() { const submit = event => { event.preventDefault(); const form=new FormData(event.currentTarget); const body=`Name: ${form.get("name")}\nReply email: ${form.get("email")}\n\n${form.get("message")}`; window.location.href=`mailto:${data.profile.email}?subject=${encodeURIComponent(form.get("subject"))}&body=${encodeURIComponent(body)}`; }; return <section id="contact" className="reveal"><div className="container"><SectionHeader title="Get In Touch" subtitle="Have a project in mind, want to collaborate, or just say hello?" /><div className="contact-wrapper"><div className="contact-info"><div className="contact-item"><div className="contact-icon"><Icon name="envelope" /></div><div className="contact-content"><span className="contact-label">Email Me</span><a href={`mailto:${data.profile.email}`} className="contact-value">{data.profile.email}</a></div></div><div className="contact-item"><div className="contact-icon"><Icon name="phone" /></div><div className="contact-content"><span className="contact-label">Call Me</span><a href={`tel:${data.profile.phone}`} className="contact-value">{data.profile.phone}</a></div></div><div className="contact-item"><div className="contact-icon"><i className="fa-brands fa-whatsapp" /></div><div className="contact-content"><span className="contact-label">WhatsApp</span><a href={`https://wa.me/${data.profile.whatsapp}`} target="_blank" rel="noreferrer" className="contact-value">Message Me Directly</a></div></div></div><div className="contact-form-card"><form onSubmit={submit}><div className="form-grid"><Field name="name" label="Your Name" placeholder="Your name" /><Field name="email" label="Your Email" placeholder="you@example.com" type="email" /></div><Field name="subject" label="Subject" placeholder="Project Collaboration Proposal" /><div className="form-group full-width"><label htmlFor="message">Message</label><textarea id="message" name="message" className="form-control" placeholder="Tell me about your project..." required /></div><button type="submit" className="btn btn-primary btn-icon"><Icon name="paper-plane" /> Send Message</button></form></div></div></div></section>; }
function Field({ name, label, placeholder, type="text" }) { return <div className={`form-group ${name === "subject" ? "full-width" : ""}`}><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} className="form-control" placeholder={placeholder} required /></div>; }

function Footer() { return <footer><div className="container footer-content"><div className="footer-logo"><Icon name="code" />AZYRON-tech</div><p className="copyright">&copy; 2026 Ayon Pal. Built with Passion & Vanilla Code. All Rights Reserved.</p></div></footer>; }

function ProjectDetail({ project }) { return <><Header /><main><section className="detail-header"><div className="container detail-header-content"><a href="/#projects" className="back-btn"><Icon name="arrow-left-long" /> Back to Projects</a><h1 className="detail-title">{project.name}</h1><div className="project-tags" style={{ justifyContent: "center", marginTop: "1rem" }}>{project.techStack.map(tech => <span className="project-tag" key={tech}>{tech}</span>)}</div></div></section><section><div className="container detail-grid"><article className="detail-main"><img className="detail-screenshot" src={`/${project.image}`} alt={`${project.name} interface`} /><h2>Project Overview</h2><p>{project.longDescription}</p><h2>Challenges</h2><p>{project.challenges}</p><h2>Future Improvements</h2><p>{project.improvements}</p></article><aside className="detail-sidebar"><h3>Technical Specs</h3><p><strong>Primary Stack</strong>{project.techStack.slice(0, 3).join(", ")}</p><p><strong>Database</strong>{project.techStack.includes("MongoDB") ? "MongoDB Atlas" : project.techStack.includes("Firebase") ? "Firebase Firestore" : "Local RPC Gateway"}</p></aside></div></section></main></>; }

export default function App() { const id=new URLSearchParams(window.location.search).get("id"); const project=data.projects.find(item => item.id === id); useEffect(() => { document.title=project ? `${project.name} | Ayon Pal` : "Ayon Pal | Web Developer & UI/UX Designer"; if (!project) { window.history.scrollRestoration = "manual"; window.scrollTo(0, 0); } }, [project]); useEffect(() => { if (project) return undefined; const revealElements = document.querySelectorAll(".reveal"); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("active"); observer.unobserve(entry.target); } }), { threshold: 0.15 }); revealElements.forEach(element => observer.observe(element)); const hashTarget = window.location.hash ? document.querySelector(window.location.hash) : null; if (hashTarget) hashTarget.classList.add("active"); return () => observer.disconnect(); }, [project]); return project ? <ProjectDetail project={project} /> : <><Header /><main><Hero /><About /><Skills /><Qualification /><Projects /><Team /><Contact /></main><Footer /></>; }
