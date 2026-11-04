import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="footer-brand">N<span>.</span></Link>
        <p>Designed & built by Naincy · Always learning, always building.</p>
        <div className="footer-links">
          <a href="https://github.com/Naincy33" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/naincy-5313551b3/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:iamnaincy33@gmail.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
