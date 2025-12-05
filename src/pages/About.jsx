import { FiDownload } from 'react-icons/fi';
import { skills, experience } from '../data/projects';
import TechBadge from '../components/TechBadge';

function About() {
  return (
    <main className="page">
      {/* About Hero */}
      <section className="section">
        <h1>About Me</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Front-End Developer
        </p>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section__title">My Story</h2>
            <p className="paragraph">
              Hi! I&apos;m Nasrin Tahsilizada, a motivited Front-End Developer with a strong passion for building clean reponsive, and user-friendly web experiences. I study Computer Science and constantly improve my skills through real project and continuous learning.
            </p>
            <p className="paragraph">
             I love turning ideas into functional interfaces using modern web technologies and care deeply about clarity, performance, and thoughful design. My experience as an English instructor has strengthened my communication, problem sloving, and teamwork abilities.
            </p>
            <p className="paragraph">
              I&apos;m always excited to take on new challenges and collaborate with talented people to build amazing things and also open to new opportunities and excited to grow as a developer. Thanks for visiting my portfolio.
            </p>

            <div className="about-cta">
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn--primary"
                aria-label="Download resume"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className="about-image">
            <img 
               src="/public/nasrin.jpg"
             
              alt="Nasrin Tahsilizada"
              className="about-image__img"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section__title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category}
              className="skill-group"
            >
              <h3 className="skill-group__title">{skillGroup.category}</h3>
              <div className="skill-group__items">
                {skillGroup.items.map(skill => (
                  <TechBadge key={skill} tech={skill} variant="primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section__title">{experience.technicalSkills.title}</h2>
        <p className="section__description">Core technologies and frameworks I work with</p>
        
        <div className="experience-skills">
          {experience.technicalSkills.skills.map((skill, index) => (
            <p key={index} className="experience-skill-item">
              <strong>✦</strong> {skill}
            </p>
          ))}
        </div>
      </section>

      {/* Language & Teaching Experience */}
      <section className="section">
        <h2 className="section__title">{experience.certifications.title}</h2>
        <div className="language-experience">
          <p className="language-experience__text">
            {experience.certifications.details}
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
