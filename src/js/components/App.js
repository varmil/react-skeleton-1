import React from 'react';
import { Link } from 'react-router';
import style from './App.css';

const App = (props) => (
  <div className={style.appDivFoo}>
    This is App component!
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/">Top</Link></li>
    </ul>
    {props.children}
  </div>
);

export default App;
