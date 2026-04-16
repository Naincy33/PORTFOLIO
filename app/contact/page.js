export default function Contact() {
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

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* SOCIAL */}
          <div className="social-section">
            <h3>Connect With Me</h3>

            <div className="social-grid">
              <a href="https://github.com/Naincy33" target="_blank">
                <img src="/github.png" />
                <p>GitHub</p>
              </a>

              <a href="https://linkedin.com" target="_blank">
                <img src="/linkedin.png" />
                <p>LinkedIn</p>
              </a>

              <a href="mailto:iamnaincy33@gmail.com">
                <img src="/gmail.png" />
                <p>Email</p>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}