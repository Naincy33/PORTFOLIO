import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="logo"><span className="logo-mark">N.</span><span>NAINCY</span></Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
        <Link href="/contact" className="nav-cta">Let&apos;s talk <span>↗</span></Link>
      </nav>
    </header>
  );
}
