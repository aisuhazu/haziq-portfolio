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
      title: " ShopSync",
      icon: "bi bi-shop",
      description:
        "ShopSync is a comprehensive, modern inventory management system built with React and Firebase. It's designed to help businesses streamline their operations by providing a centralized platform for managing products, suppliers, orders, and analytics.",
      image: "ShopSync.jpg",
      technologies: ["React", "Firebase", "Firestore", "Axios"],
      codeLink: "https://github.com/aisuhazu/shop-sync",
      liveLink: "https://shop-sync-lilac-tau.vercel.app/",
      reverse: true,
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
