const milestones = [
  { year: "2024 — 2028", title: "B.Tech · Computer Science & Engineering", place: "B.M.S. College of Engineering, Bengaluru", detail: "Currently pursuing undergraduate studies. Current CGPA: 9.33.", side: "left" },
  { year: "2023", title: "Senior Secondary", place: "S.L. D.A.V. Public School", detail: "Completed Class XII with 95%.", side: "right" },
  { year: "2021", title: "Secondary School", place: "S.L. D.A.V. Public School", detail: "Completed Class X with 94.5%.", side: "left" },
];

export default function Academics() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-wrap">
        <div className="section-index">EDUCATION & MILESTONES</div>
        <h1>A foundation for<br /><span>what comes next.</span></h1>
        <p className="inner-intro">My academic journey, along with a few experiences that have shaped how I learn and work.</p>
      </section>
      <section className="section-wrap academics-content">
        <div className="section-index">01 / EDUCATION</div>
        <div className="timeline">
          {milestones.map((item) => (
            <article className={`timeline-item ${item.side}`} key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-card"><h2>{item.title}</h2><strong>{item.place}</strong><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
        <div className="section-index achievement-label">02 / HACKATHONS & LEARNING</div>
        <div className="achievement-list">
          <div><strong>Code Forge Hackathon</strong><span>Finalist · BMSCE</span></div>
          <div><strong>Algothon</strong><span>Runner-up</span></div>
          <div><strong>BigCode</strong><span>Selected for Round 1</span></div>
          <div><strong>Generative AI Workshop</strong><span>IISc Bengaluru · 2025</span></div>
        </div>
      </section>
    </main>
  );
}
