import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentName = 'Daniel';

ReactDOM.render(
  <React.StrictMode>
    <App name={currentName} message={<div>Casual massage</div>}/>
  </React.StrictMode>,
  document.getElementById('root')
);

