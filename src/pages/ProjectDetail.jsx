import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';
import TechBadge from '../components/TechBadge';

function ProjectDetail() {  
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="page">
        <div className="error-content">
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/projects" className="btn btn--primary">
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/projects')} 
        className="back-btn"
        aria-label="Back to projects"
      >
        <FiArrowLeft /> Back to Projects
      </button>

      {/* Project Header */}
      <section className="project-detail-header">
        <div className="project-detail-header__content">
          <h1 className="project-detail-header__title">{project.title}</h1>
          <p className="project-detail-header__summary">{project.summary}</p>

          <div className="project-detail-header__actions">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <FiGithub /> View Code
              </a>
            )}
          </div>
        </div>

        <div className="project-detail-header__image">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="project-detail-content">
          <div className="project-detail-section">
            <h2 className="project-detail-section__title">Overview</h2>
            <p className="project-detail-section__text">{project.description}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section__title">The Challenge</h2>
            <p className="project-detail-section__text">{project.problem}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section__title">The Solution</h2>
            <p className="project-detail-section__text">{project.solution}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section__title">The Outcome</h2>
            <p className="project-detail-section__text">{project.outcome}</p>
          </div>

          <div className="project-detail-section">
            <h2 className="project-detail-section__title">Technologies Used</h2>
            <div className="project-tech-list">
              {project.tech.map(tech => (
                <TechBadge key={tech} tech={tech} variant="primary" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section">
        <h2 className="section__title">More Projects</h2>
        <div className="related-projects">
          {projects
            .filter(p => p.id !== project.id)
            .slice(0, 3)
            .map(relatedProject => (
              <div
                key={relatedProject.id}
                className="related-project-card"
                onClick={() => navigate(`/projects/${relatedProject.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={relatedProject.image} alt={relatedProject.title} />
                <h3>{relatedProject.title}</h3>
                <p>{relatedProject.summary}</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
