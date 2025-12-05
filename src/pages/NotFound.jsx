import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

function NotFound() {
  return (
    <main className="page">
      <div className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__text">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          
          <div className="not-found__actions">
            <Link to="/" className="btn btn--primary">
              <FiHome /> Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn--secondary"
            >
              <FiArrowLeft /> Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
