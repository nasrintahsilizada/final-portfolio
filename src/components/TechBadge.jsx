import PropTypes from 'prop-types';
import clsx from 'clsx';

function TechBadge({ tech, variant = 'default' }) {
  return (
    <span 
      className={clsx('tech-badge', `tech-badge--${variant}`)}
      aria-label={`Technology: ${tech}`}
    >
      {tech}
    </span>
  );
}

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

export default TechBadge;
