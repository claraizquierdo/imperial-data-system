import React from 'react';
import '../css/Navigation.scss';

const Navigation = ({ activePage, setActivePage }) => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <button 
                        className={activePage === "planets" ? 'active button button--as-link' : 'button button--as-link'} 
                        onClick={() => setActivePage("planets")}
                    >
                        <span className="icon icon-earth" />
                        Planets
                    </button>
                </li>
                <li>
                    <button 
                        className={activePage === "starships" ? 'active button button--as-link' : 'button button--as-link'}
                        onClick={() => setActivePage("starships")}
                    >
                        <span className="icon icon-rocket" />
                        Starships
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

