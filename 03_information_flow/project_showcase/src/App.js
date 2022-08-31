import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  console.log('rendering');
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList
        projects={searchResults}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default App;
