import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectGrid({ projects }) {
  return (
    <div className="card-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};
