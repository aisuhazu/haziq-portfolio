function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Full Stack Web
            <br />
            Developer 👋
          </h1>
          <p className="hero-subtitle">
            Hi, I'm Haziq. A passionate Full Stack Web
            <br />
            Developer based in Malaysia. 📍
          </p>
          <div className="hero-links">
            <a
              href="https://www.linkedin.com/in/ajiq-rozi-075906274/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/aisuhazu"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="/Haziq_Resume.pdf"
              download="Haziq_Resume.pdf"
              className="resume-download"
              title="Download Resume"
            >
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="haziqphoto.jpg" alt="Profile" />
        </div>
      </div>

      <div className="tech-stack">
        <p>Tech Stack</p>
        <div className="tech-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            alt="Express"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg"
            alt="PostgreSQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
            alt="Firebase"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
