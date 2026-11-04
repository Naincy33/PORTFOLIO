import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const highlights = [
  { value: "9.24", label: "Current CGPA" },
  { value: "400+", label: "LeetCode problems solved" },
  { value: "200+", label: "Day coding streak" },
];

const achievements = [
  {
    title: "Code Forge Hackathon",
    detail: "Finalist",
    note: "BMS College of Engineering",
  },
  {
    title: "Algothon",
    detail: "Runner-up",
    note: "Competitive problem solving",
  },
  {
    title: "BigCode",
    detail: "Round 1 selected",
    note: "Technical challenge",
  },
  {
    title: "Generative AI Workshop",
    detail: "Participant",
    note: "IISc Bengaluru · 2025",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIPS & COLLABORATIONS</div>
            <p className="hero-kicker">HELLO, I&apos;M NAINCY</p>
            <h1>Building thoughtful<br /><span>digital experiences.</span></h1>
            <p className="hero-description">
              Computer Science undergraduate who enjoys turning ideas into useful products —
              from full-stack applications to data-driven and AI-powered solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
              <Link className="button button-ghost" href="/contact">Let&apos;s connect</Link>
              <a className="text-link" href="/RESUME.pdf" target="_blank" rel="noreferrer">View résumé ↗</a>
            </div>
            <div className="hero-meta">
              <span><i className="meta-line" /> B.Tech CSE · BMSCE</span>
              <span>Bengaluru, India</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-topline"><span>CREATIVE MINDSET</span><span>01 / 04</span></div>
              <div className="portrait-image-wrap">
                <Image src="/mine.png" alt="Portrait of Naincy" fill priority className="portrait-image" sizes="(max-width: 900px) 85vw, 42vw" />
              </div>
              <div className="portrait-caption">
                <div><span className="caption-label">CURRENTLY EXPLORING</span><strong>AI · System Design · Full Stack</strong></div>
                <span className="caption-mark">✳</span>
              </div>
            </div>
            <div className="floating-note"><span className="note-icon">✦</span><div><strong>Learn. Build. Iterate.</strong><small>A little better every day.</small></div></div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></div>
      </section>

      <section className="intro-strip section-wrap">
        <div className="section-index">01 / A QUICK INTRO</div>
        <div className="intro-content">
          <h2>Curiosity-led. <span>Builder-minded.</span></h2>
          <p>
            I like working at the intersection of software engineering, machine learning,
            and product thinking. I learn best by building — understanding the problem,
            shaping the solution, and polishing the details that make it useful.
          </p>
          <Link href="/about" className="inline-link">A little more about me <span>↗</span></Link>
        </div>
        <div className="stat-row">
          {highlights.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong><span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section section-wrap" id="projects">
        <div className="section-heading">
          <div><div className="section-index">02 / SELECTED WORK</div><h2>Things I&apos;ve <span>built.</span></h2></div>
          <p>A mix of full-stack products, machine learning experiments, and ideas I&apos;m actively shaping.</p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-card" key={project.title}>
              <div className="work-image">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 90vw, 45vw" />
                <span className="work-number">0{index + 1}</span>
                <span className="work-status">{project.status}</span>
              </div>
              <div className="work-body">
                <div className="work-title-row"><h3>{project.title}</h3><span className="work-year">{project.type}</span></div>
                <p>{project.desc}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="work-links">
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer">View source <span>↗</span></a> : <span className="private-note">Project details available on request</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-heading">
          <div><div className="section-index">03 / MY TOOLKIT</div><h2>Skills & <span>technologies.</span></h2></div>
          <p>Tools I use to design, develop, analyze, and keep learning.</p>
        </div>
        <div className="skill-groups">
          {skills.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-top"><span>0{index + 1}</span><h3>{group.title}</h3></div>
              <p>{group.desc}</p>
              <div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition-section section-wrap">
        <div className="section-heading">
          <div><div className="section-index">04 / BEYOND THE IDE</div><h2>Learning in <span>the real world.</span></h2></div>
          <p>Experiences that have challenged me to think clearly, collaborate, and build under constraints.</p>
        </div>
        <div className="recognition-grid">
          {achievements.map((item, index) => (
            <div className="recognition-card" key={item.title}>
              <span className="recognition-index">0{index + 1}</span>
              <div><h3>{item.title}</h3><strong>{item.detail}</strong><p>{item.note}</p></div>
              <span className="recognition-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-section section-wrap">
        <div className="closing-card">
          <div className="section-index">05 / WHAT&apos;S NEXT?</div>
          <h2>Have an interesting problem<br />in mind? <span>Let&apos;s build.</span></h2>
          <p>I&apos;m always happy to connect over internships, ideas, and meaningful collaborations.</p>
          <Link href="/contact" className="button button-primary">Get in touch <span>↗</span></Link>
          <div className="closing-orbit orbit-one" /><div className="closing-orbit orbit-two" />
        </div>
      </section>
    </main>
  );
}
