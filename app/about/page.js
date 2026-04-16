import Image from "next/image"

export default function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-img">
          <Image 
            src="/profilepic.jpg"
            width={350}
            height={350}
            alt="profile"
            className="about-photo"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <h1>Hi, I’m <span>Naincy</span></h1>

          <p>
            A passionate Computer Science Engineering student who loves bringing ideas to
            life through code and design. I enjoy turning imagination into interactive,
            functional, and meaningful projects — whether it’s a website that tells a story
            or a program that solves a real problem.
          </p>

          <p>
            With experience in HTML, CSS, JavaScript, React, Next.js, Python, Java, and MySQL,
            I love blending technical depth with creative presentation. From understanding
            data structures to designing user-friendly interfaces, I enjoy connecting logic
            with aesthetics.
          </p>

          <p>
            I believe in learning by doing — experimenting, debugging, and improving through
            real projects. I’m curious, detail-oriented, and driven by the satisfaction of
            seeing ideas take shape on screen.
          </p>

          <p>
            Beyond coding, I value creativity, expression, and clarity — because great work
            isn’t just about how it works, but also about how it feels.
          </p>

          {/* BUTTONS */}
          <div className="about-btns">
            <a href="/Resume.pdf" download className="btn-primary">
              Download Resume
            </a>

            <a href="/contact" className="btn-outline">
              Contact Me
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}