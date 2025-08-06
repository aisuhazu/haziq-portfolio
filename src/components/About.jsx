function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="HaziqCertificate.jpg" alt="About me" />
          </div>
          <div className="about-text">
            <h3 className="section-subtitle">ABOUT ME</h3>
            <h2 className="section-title">
              A dedicated Full Stack Web Developer
              <br />
              based in Malaysia 📍
            </h2>
            <p>
              As a Junior Full Stack Web Developer, I bring practical experience
              using Git and GitHub for version control, collaborative coding,
              and resolving branch conflicts in real-world development
              environments. I thrive in team settings, enjoy learning from
              peers, and love contributing across disciplines to create
              engaging, user-focused web applications. I'm eager to keep
              expanding my skills and make a meaningful impact on innovative
              projects.
            </p>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skills">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skills">
                  <span>Node js</span>
                  <span>Express js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skills">
                  <span>Git</span>
                  <span>VS Code</span>
                  <span>Vercel</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
