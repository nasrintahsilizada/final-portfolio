import { useNavigate } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import TechBadge from './TechBadge';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      <div className="project-card__layout">
        {/* Image Section */}
        <div className="project-card__image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-card__image"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="project-card__content">
          <h3 id={`project-${project.id}`} className="project-card__title">
            {project.title}
          </h3>

          <p className="project-card__summary">{project.summary}</p>

          {/* Tech Stack */}
          <div className="project-card__tech">
            {project.tech.slice(0, 3).map(tech => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {project.tech.length > 3 && (
              <span className="project-card__tech-more">+{project.tech.length - 3}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="project-card__actions">
            <button
              onClick={handleViewProject}
              className="btn btn--primary"
              aria-label={`View ${project.title} details`}
            >
              View Project
            </button>
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                aria-label={`View ${project.title} code on GitHub`}
              >
                <FiGithub /> Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                aria-label={`View ${project.title} live demo`}
              >
                <FiExternalLink /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
