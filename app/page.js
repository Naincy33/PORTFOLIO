import Image from "next/image"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

export default function Home() {
  return (
    <main>

      {/* 🔥 HERO */}
      <section className="hero">

        <Image
          src="/mine.png"
          fill
          alt="hero"
          className="hero-img"
        />

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>{"Hi, I'm Naincy"}</h1>
          <h2>Tech Enthusiast</h2>

          <p>
            I build modern, scalable and aesthetic web experiences using React & Next.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

      </section>


        {/* 🔥 SKILLS */}
      <section className="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    

    </main>
  )
}