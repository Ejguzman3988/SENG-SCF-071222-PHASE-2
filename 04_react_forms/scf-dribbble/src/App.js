import logo from './logo.svg';
import './App.css';
import ImageList from './components/ImageList';
import coffee from "./CoffeeBreak.gif"
import tea from "./Tea.gif"
import donut from "./donut.gif"
import couch from "./couch.webp"


function App() {
  return (
    <div className="App">
      {/* <ImageList />  */}
      <header className="App-header">
        <img src={couch} alt="logo" />
        <img src={coffee} className="App-logo" alt="logo" />
        <img src={tea} className="App-logo" alt="logo" />
        <img src={donut} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
