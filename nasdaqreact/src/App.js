import './App.css';
import Stock from './components/Stock';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <div className='Stock-container'>
          <Stock nome="TWITTER" fondatore="Elon Musk" eta={10} />
          <Stock nome="APPLE" fondatore="Jobs" eta={20} />
          <Stock nome="AMZN" fondatore="Bezos" eta={40} />
          <Stock nome="META" fondatore="Zukenberg" eta={6} />
        </div>

      </header>
    </div>
  );
}

export default App;
