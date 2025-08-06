import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section) => {
    return activeSection === section ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          Haziq Rozi
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <button
            className={`nav-link ${isActive("home")}`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className={`nav-link ${isActive("about")}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={`nav-link ${isActive("projects")}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={`nav-link ${isActive("contact")}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
