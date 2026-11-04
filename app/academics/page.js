const milestones = [
  { year: "2024 — 2028", title: "B.Tech · Computer Science & Engineering", place: "B.M.S. College of Engineering, Bengaluru", detail: "Currently pursuing undergraduate studies. CGPA: 9.24 / 10 (as listed on résumé).", side: "left" },
  { year: "2023", title: "Senior Secondary", place: "S.L. D.A.V. Public School", detail: "Completed Class XII with 95%.", side: "right" },
  { year: "2021", title: "Secondary School", place: "S.L. D.A.V. Public School", detail: "Completed Class X with 94.5%.", side: "left" },
];

export default function Academics() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-wrap">
        <div className="section-index">EDUCATION & EXPERIENCE</div>
        <h1>Learning, building,<br /><span>moving forward.</span></h1>
        <p className="inner-intro">My academic journey, professional exposure, and milestones along the way.</p>
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
        <div className="section-index achievement-label">02 / EXPERIENCE</div>
        <div className="achievement-list">
          <div><strong>Machine Learning & AI Virtual Intern</strong><span>CloudCredits Technologies · May 2026 – Aug 2026</span></div>
          <p className="experience-note">Applied data preprocessing, predictive analytics, supervised learning, and model evaluation techniques to real-world datasets.</p>
        </div>
        <div className="section-index achievement-label">03 / ACHIEVEMENTS</div>
        <div className="achievement-list">
          <div><strong>Code Forge Hackathon</strong><span>Finalist · BMSCE</span></div>
          <div><strong>Algothon Coding Hackathon</strong><span>Runner-up</span></div>
          <div><strong>BigCode Competition</strong><span>Selected · Round 1</span></div>
          <div><strong>HackVega 2.0 Hackathon</strong><span>Shortlisted · Final Round (Round 3)</span></div>
          <div><strong>Adobe University Hackathon 2026</strong><span>Advanced to Round 2</span></div>
          <div><strong>LeetCode</strong><span>400+ problems · 200+ day coding streak</span></div>
          <div><strong>Generative AI Workshop</strong><span>IISc Bengaluru</span></div>
        </div>
      </section>
    </main>
  );
}
