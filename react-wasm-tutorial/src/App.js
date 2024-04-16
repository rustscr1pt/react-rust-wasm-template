import logo from './logo.svg';
import './App.css';
import {greet, get_sum} from './pkg/wasm_lib'; // We import functions greet & get_sum from compiled directory
import {useState} from "react";

function App() {
  const [swap, setSwap] = useState("old note");
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => setSwap(greet("new note"))}>Change value</button>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              {swap} {get_sum()}
            </a>
          </header>
        </div>
    )
}

export default App;
