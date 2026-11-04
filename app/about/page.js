import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  ["01", "Machine Learning & AI", "Building predictive solutions and exploring deep learning, retrieval-augmented generation, semantic search, and multimodal AI."],
  ["02", "Full-Stack Development", "Developing web and mobile applications with React, Next.js, FastAPI, Node.js, and relational or NoSQL databases."],
  ["03", "Scalable Systems", "Learning system-design fundamentals including caching, load balancing, stateless architecture, database replication, and high-level design."],
];

export default function About() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-wrap">
        <div className="section-index">A LITTLE ABOUT ME</div>
        <h1>Curious about AI.<br /><span>Driven to build.</span></h1>
        <div className="about-layout">
          <div className="about-portrait"><Image src="/profilepic.jpg" width={520} height={620} alt="Naincy" priority /></div>
          <div className="about-copy">
            <p className="lead-copy">I&apos;m Naincy, a Computer Science & Engineering undergraduate at B.M.S. College of Engineering, Bengaluru.</p>
            <p>My interests lie at the intersection of Machine Learning, Generative AI, and full-stack development. I enjoy taking an idea from its technical foundations to a working application — whether that means preparing data, building a model, designing an API, or creating an intuitive interface.</p>
            <p>I completed a Machine Learning & AI Virtual Internship at CloudCredits Technologies (May–August 2026), where I worked on data preprocessing, predictive analytics, supervised learning models, and model evaluation using real-world datasets.</p>
            <p>Alongside project development, I continue to strengthen my problem-solving and computer science fundamentals. I have solved 400+ LeetCode problems and am actively learning how to design scalable systems.</p>
            <div className="about-actions"><a className="button button-primary" href="/RESUME.pdf" target="_blank" rel="noreferrer">View résumé ↗</a><Link className="button button-ghost" href="/contact">Contact me</Link></div>
          </div>
        </div>
      </section>
      <section className="section-wrap focus-section">
        <div className="section-index">AREAS I&apos;M FOCUSED ON</div>
        <div className="focus-list">
          {focusAreas.map(([number, title, description]) => <article className="focus-row" key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}
        </div>
      </section>
    </main>
  );
}
