import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectGrid from './components/ProjectGrid.js';

function App() {
  const [projects, setProjects] = useState([]);

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

  return (
    <div className="projects-section">
      <ProjectGrid projects={projects} />
    </div>
  );
}

export default App;
