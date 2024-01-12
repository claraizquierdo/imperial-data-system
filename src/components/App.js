import '../css/App.scss';
import Navigation from './Navigation';
import Planets from './Planets';
import Starships from './Starships';
import {useState} from 'react';

function App() {
    const [activePage, setActivePage] = useState("planets");
    return (
        <div>
            <header className="header">
                <img src="logo.png" className="logo" alt="logo" />
                <h1>
                    Imperial destroyers center
                </h1>
            </header>
            <Navigation activePage={activePage} setActivePage={setActivePage}/>
            <main>
                {activePage === "planets" ? 
                    <Planets />
                 : 
                    <Starships />
                }
            </main>
            <footer>
                The footer
            </footer>
        </div>
    );
}

export default App;
