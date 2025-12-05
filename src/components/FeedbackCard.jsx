import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function FeedbackCard({ name, role, text, avatar }) {
  return (
    <motion.article 
      className="feedback-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="feedback-card__content">
        <p className="feedback-card__text">&ldquo;{text}&rdquo;</p>
      </div>
      <div className="feedback-card__author">
        <img 
          src={avatar} 
          alt={`${name}, ${role}`}
          className="feedback-card__avatar"
        />
        <div>
          <h4 className="feedback-card__name">{name}</h4>
          <p className="feedback-card__role">{role}</p>
        </div>
      </div>
    </motion.article>
  );
}

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default FeedbackCard;
