import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

function App() {
  //JSX stands for JavaScript XML. JSX allows us to write HTML in React.
  return (
    <div className="App">
      <Header />
      <ProjectList />

      {/* {Header()} */}
    </div>
  );
}

export default App;
