import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Featured', 'In Progress', 'Completed'];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(p => p.status === activeFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  return (
    <main className="page">
      {/* Page Header */}
      <section className="section">
        <h1>My Projects</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
          A collection of my work
        </p>
      </section>

      {/* Filters and Search */}
      <section className="section">
        <div className="projects-controls">
          {/* Filter Buttons */}
          <div className="filter-buttons" role="group" aria-label="Project filters">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <FiSearch className="search-bar__icon" />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar__input"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="projects-count">
          {filteredProjects.length === 0 ? (
            <p className="projects-count__text">No projects found.</p>
          ) : (
            <p className="projects-count__text">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 && (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;
