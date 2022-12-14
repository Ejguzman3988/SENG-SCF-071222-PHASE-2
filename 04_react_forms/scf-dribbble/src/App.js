import logo from './logo.svg';
import './App.css';
import ImageList from './components/ImageList';
import coffee from "./CoffeeBreak.gif"


function App() {
  return (
    <div className="App">
      <ImageList /> 
      <header className="App-header">
        <img src={coffee} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
