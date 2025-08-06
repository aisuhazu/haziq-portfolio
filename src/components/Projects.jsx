import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Travelog 🗺️",
      description:
        "Travelog is a digital travel journal platform that enables users to create, organize, and share travel experiences with interactive maps, photo galleries, and comprehensive trip management features.",
      image: "travelogapp.jpg",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Firebase",
      ],
      codeLink: "https://github.com/aisuhazu/travel-app",
      liveLink: "https://travel-app-azure-ten.vercel.app/",
      reverse: false,
    },
    {
      id: 2,
      title: "COINDOM 🪙",
      description:
        "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      image:
        "https://via.placeholder.com/500x300/3b82f6/ffffff?text=Crypto+App",
      technologies: ["React", "SCSS"],
      codeLink: "#",
      liveLink: "#",
      reverse: true,
    },
    {
      id: 3,
      title: "PORTFOLIO WEBSITE 💼",
      description:
        "A modern, responsive portfolio website built with React and styled with CSS. Features smooth animations and a clean, professional design.",
      image:
        "https://via.placeholder.com/500x300/10b981/ffffff?text=Portfolio+Site",
      technologies: ["React", "CSS3", "JavaScript"],
      codeLink: "#",
      liveLink: "#",
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h3 className="section-subtitle">PROJECTS</h3>
        <h2 className="section-title">
          From backyard dreams to frontend polish, here&apos;s what I&apos;ve
          built 🧩
        </h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
