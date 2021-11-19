import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App"
import reportWebVitals from './reportWebVitals';
import "tachyons";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// $ npm run deploy

// > robofriends@0.1.0 predeploy C:\Users\szysz\vs coding\secondbootcamp\react\robofriends
// > npm run build


// > robofriends@0.1.0 build C:\Users\szysz\vs coding\secondbootcamp\react\robofriends
// > react-scripts build

// Creating an optimized production build...
// Compiled successfully.

// File sizes after gzip:

//   41.83 KB  build\static\js\2.d40eea25.chunk.js
//   12.81 KB  build\static\css\2.31461e4f.chunk.css
//   1.63 KB   build\static\js\3.5544d60d.chunk.js
//   1.17 KB   build\static\js\runtime-main.9b776e20.js
//   1.15 KB   build\static\js\main.a41bf0ce.chunk.js
//   337 B     build\static\css\main.9432c1a0.chunk.css

// The project was built assuming it is hosted at /robosearch/.
// You can control this with the homepage field in your package.json.

// The build folder is ready to be deployed.

// Find out more about deployment here:

//   https://cra.link/deployment


// > robofriends@0.1.0 deploy C:\Users\szysz\vs coding\secondbootcamp\react\robofriends
// > gh-pages -d build

// Published

