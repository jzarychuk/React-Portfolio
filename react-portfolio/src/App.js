import { useState, useEffect } from 'react';
import './App.css';
import ProjectGrid from './components/ProjectGrid.js';
import TagSortDropdown from './components/TagSortDropdown.js';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to load projects.json');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const allTags = Array.from(
    new Set(
      projects.flatMap((project) => project.tags.map((tag) => tag.label)),
    ),
  );

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = selectedTag
    ? projects.filter((project) =>
        project.tags.some((tag) => tag.label === selectedTag),
      )
    : projects;

  return (
    <div className="projects-section">
      <TagSortDropdown tags={allTags} onTagSelect={handleTagSelect} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}

export default App;
