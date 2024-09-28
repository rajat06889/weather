// // index.js
// import React from 'react';
// import { createRoot } from 'react-dom/client';  // Use createRoot from react-dom/client
// import App from './App';
// import './index.css';

// // Find the root element in your HTML
// const container = document.getElementById('root');

// // Create a root and render the app using createRoot
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

