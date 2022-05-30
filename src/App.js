import logo from './logo.svg';
import './App.css';

// there are two types of components
// - class
// - function

function App() {
  //return is mandatory
  return (
    // return has only one object
    <div className="App">
      <header className="App-header">
        {/* todas as variaveis sao envolvidas por chavetas */}
        <img src={logo} className="App-logo" alt="logo" />
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
      <div>
        Here we are going to do something
      </div>
      <footer>
        &copy Rodrigo Mendes
      </footer>      
    </div>
  );
}

export default App;
