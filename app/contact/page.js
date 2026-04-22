"use client"

import { useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Get in touch</h1>
          <p>
            Whether you are looking for a project collaboration or just want to
            say hi, feel free to reach out!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <div className="contact-box">
            <h2>Contact Me</h2>

            {submitted ? (
              <p className="success-msg">
                ✅ Message sent successfully! I’ll get back to you soon 🚀
              </p>
            ) : (
              <form
                className="contact-form"
                action="https://formspree.io/f/mqewgzyd"
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            )}
          </div>

          {/* SOCIAL */}
          <div className="social-section">
            <h3>Connect With Me</h3>

            <div className="social-grid">
              <a
                href="https://github.com/Naincy33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="GitHub" />
                <p>GitHub</p>
              </a>

              <a
                href="https://www.linkedin.com/in/naincy-5313551b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
                <p>LinkedIn</p>
              </a>

              <a href="mailto:iamnaincy33@gmail.com">
                <img src="/gmail.png" alt="Email" />
                <p>Email</p>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}