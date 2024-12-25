import './ProjectGrid.css';
import ProjectCard from './ProjectCard.js';

function ProjectGrid ({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          date={project.date}
          description={project.description}
          link={project.link}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;