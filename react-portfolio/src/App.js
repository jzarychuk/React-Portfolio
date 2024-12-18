import './App.css';
import ProjectCard from './components/ProjectCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectCard 
          image="/image.jpg"
          title="My Project"
          date="December, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          link="http://www.example.com/"
        />
      </header>
    </div>
  );
}

export default App;
