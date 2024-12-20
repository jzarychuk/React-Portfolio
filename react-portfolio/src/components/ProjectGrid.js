import './ProjectGrid.css';
import ProjectCard from './ProjectCard.js';

// Generate evenly-spaced HSL colors
const generateColors = (n) => {
  const step = 360 / n;
  const colors = [];
  for (let i = 0; i < n; i++) {
    const hue = (i * step) % 360;
    colors.push(`hsl(${hue}, 100%, 40%)`);
  }
  return colors;
};

const tagLabels = [
  "Tag 1",
  "Long Tag 2",
  "Tag 3",
  "Tag 4",
  "Tag 5",
  "Long Tag 6",
  "Longer Tag 7",
  "Tag 8",
  "Tag 9",
];

function ProjectGrid () {
  const colors = generateColors(9);
  const projectTags = tagLabels.map((label, index) => ({
    label,
    color: colors[index],
  }));  

  return (
    <div className="project-grid">
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
      <ProjectCard 
        image="/image.jpg"
        title="My Project"
        date="December, 2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="http://www.example.com/"
        tags={projectTags}
      />
    </div>
  );
}

export default ProjectGrid;