function ProjectCard({ project }) {
  const { title, description, image, technologies, codeLink, liveLink, reverse } = project

  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={codeLink} className="btn-link" target="_blank" rel="noopener noreferrer">
            Code <i className="fab fa-github"></i>
          </a>
          <a href={liveLink} className="btn-link" target="_blank" rel="noopener noreferrer">
            Live Demo <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard