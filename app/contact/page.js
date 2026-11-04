"use client";

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="section-index">HAVE A PROJECT IN MIND?</div>
          <h1>Let&apos;s make<br />something happen.</h1>
          <p>Interested in an internship, a collaboration, or just exchanging ideas? Send me a note. I&apos;d love to hear from you.</p>
        </div>
        <div className="contact-right">
          <div className="contact-box">
            <h2>Send a message</h2>
            <form className="contact-form" action="https://formspree.io/f/mqewgzyd" method="POST">
              <input type="text" name="name" placeholder="Your name" aria-label="Your name" required />
              <input type="email" name="email" placeholder="Your email" aria-label="Your email" required />
              <textarea name="message" placeholder="Tell me what you have in mind..." aria-label="Your message" required />
              <button type="submit">Send message ↗</button>
            </form>
          </div>
          <div className="social-section">
            <h3>Find me elsewhere</h3>
            <div className="social-grid">
              <a href="https://github.com/Naincy33" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="" /><span>GitHub</span></a>
              <a href="https://www.linkedin.com/in/naincy-5313551b3/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="" /><span>LinkedIn</span></a>
              <a href="mailto:iamnaincy33@gmail.com"><img src="/gmail.png" alt="" /><span>Email</span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
