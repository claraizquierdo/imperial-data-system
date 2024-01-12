import React from 'react';
import '../css/Navigation.scss';

const Navigation = ({setActivePage}) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={() =>setActivePage("planets")}>Planets</button>
        </li>
        <li>
          <button onClick={() =>setActivePage("starships")}>Starships</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

