import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.css';
import App from './App';
import Parse from 'parse';


Parse.initialize(
  "FdZrqodDm8FvIXcka83uEeQroVywUAa3QXoca1nF",
  "Q8jdNGWyI9OgKDZBq1YASx50weB5yCZNpQfkk8ek"
);

Parse.serverURL = "https://parseapi.back4app.com/";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
