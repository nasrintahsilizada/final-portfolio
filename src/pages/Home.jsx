import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';


function Home() {
  const featuredProjects = projects.filter(p => p.status === 'Featured').slice(0, 2);

  return (
    <main className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__name">Nasrin</span>
          </h1>
          <p className="hero__subtitle">
            Front-End Developer
          </p>  
          <p className="hero__description">
            I build web applications with React, Node.js, and modern technologies.
          </p>
          
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View My Work
              <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn--secondary">
              Get In Touch
            </Link>
          </div>

          <div className="hero__socials">
            <a 
              href="https://github.com/nasrintahsilizada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub profile"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/nasrintahsilizada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="nasrintahsilizada8896@gmail.com"
              className="social-link"
              aria-label="Email contact"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="hero__illustration">
          <img src="/Picture1.jpg" alt="Portfolio illustration"/>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <h2 className="section__title">Featured Projects</h2>
        
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section">
        <h2 className="section__title">What I Do</h2>
        <div className="skills-overview">
          <div className="skill-category">
            <div className="skill-category__icon">💻</div>
            <h3 className="skill-category__title">Frontend</h3>
            <p className="skill-category__description">
              React, JavaScript, CSS, responsive design
            </p>
          </div>

          <div className="skill-category">
            <div className="skill-category__icon">⚙️</div>
            <h3 className="skill-category__title">Backend</h3>
            <p className="skill-category__description">
              Node.js, Express, databases, APIs
            </p>
          </div>

          <div className="skill-category">
            <div className="skill-category__icon">🎨</div>
            <h3 className="skill-category__title">Design</h3>
            <p className="skill-category__description">
              UI/UX, accessibility, user experience
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-alt)', borderRadius: '0.75rem' }}>
          <h2>Let&apos;s Build Something</h2>
          <p>Have a project in mind? Let&apos;s talk.</p>
          <Link to="/contact" className="btn btn--primary">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
