import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Naincy</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}