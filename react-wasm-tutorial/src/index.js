import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import init from "./pkg/wasm_lib"; // import init WASM from compiled directory. Do not enter the file format, just define file name.
// init() to initialize WASM. If succeeds => render the application.
init().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})
