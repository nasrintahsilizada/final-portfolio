import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiInfo, FiX } from 'react-icons/fi';

function Toast({ message, type = 'info', isVisible, onClose }) {
  const icons = {
    success: <FiCheckCircle />,
    error: <FiXCircle />,
    info: <FiInfo />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`toast toast--${type}`}
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          <span className="toast__icon">{icons[type]}</span>
          <p className="toast__message">{message}</p>
          <button
            onClick={onClose}
            className="toast__close"
            aria-label="Close notification"
          >
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Toast;
