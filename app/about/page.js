import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  ["01", "Software Engineering", "Designing and building full-stack applications with an eye for usability, structure, and maintainability."],
  ["02", "Data & Machine Learning", "Exploring how data can answer practical questions — from prediction workflows to geospatial analysis."],
  ["03", "Continuous Learning", "Strengthening fundamentals in DSA, databases, operating systems, networks, and system design."],
];

export default function About() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-wrap">
        <div className="section-index">A LITTLE ABOUT ME</div>
        <h1>Code with purpose.<br /><span>Curiosity without limits.</span></h1>
        <div className="about-layout">
          <div className="about-portrait"><Image src="/profilepic.jpg" width={520} height={620} alt="Naincy" priority /></div>
          <div className="about-copy">
            <p className="lead-copy">I&apos;m Naincy — a Computer Science undergraduate at B.M.S. College of Engineering, Bengaluru.</p>
            <p>I enjoy turning ideas into working products. My work so far has taken me across frontend development, backend APIs, databases, data analysis, and machine learning. I like understanding how the pieces fit together, not just making a screen look right.</p>
            <p>Recently, I&apos;ve been building projects around subscription analytics, traditional-craft discovery, and satellite-image-based environmental monitoring. Alongside project work, I keep sharpening my fundamentals through DSA practice and system-design study.</p>
            <p>I&apos;m motivated by thoughtful teams, meaningful problems, and the process of making an idea a little more real every day.</p>
            <div className="about-actions"><a className="button button-primary" href="/RESUME.pdf" target="_blank" rel="noreferrer">View résumé ↗</a><Link className="button button-ghost" href="/contact">Contact me</Link></div>
          </div>
        </div>
      </section>
      <section className="section-wrap focus-section">
        <div className="section-index">WHAT I LIKE WORKING ON</div>
        <div className="focus-list">
          {focusAreas.map(([number, title, description]) => <article className="focus-row" key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}
        </div>
      </section>
    </main>
  );
}
