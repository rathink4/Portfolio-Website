import { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = ({ projectsRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ 
      position: isScrolled ? 'fixed' : 'absolute',
      top: isScrolled ? '0' : 'auto',
      zIndex: 1000
    }}>
      <div className="main-nav">
        <a onClick={() => scrollToSection("Homepage")} className="logo">Rathin Kamble</a>
        <ul className="navbar">
          <li className="menu-item">
            <a onClick={() => scrollToSection("About")} className="menu-link">About</a>
          </li>
          <li className="menu-item">
            <a onClick={() => scrollToSection("Skills")} className="menu-link">Skills</a>
          </li>
          <li className="menu-item">
            <a onClick={scrollToProjects} className="menu-link">Project</a>
          </li>
          <li className="menu-item">
            <a onClick={() => scrollToSection("Contact")} className="menu-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;