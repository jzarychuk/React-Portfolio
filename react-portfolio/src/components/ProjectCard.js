import './ProjectCard.css';

function ProjectCard({ image, title, date, description, link }) {
  return (
    <a
      className="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card">
        <div className="project-card__upper">
          <img src={image} className="project-card__image" alt="" />
        </div>
        <div className="project-card__lower">
          <h1 className="project-card__title">{title}</h1>
          <h2 className='project-card__date'>{date}</h2>
          <p className="project-card__description">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;