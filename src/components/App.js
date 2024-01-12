import '../css/components/App.scss';
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
                <h1 className="h1">
                    Imperial destroyers center
                </h1>
            </header>
            <main className="main">
                <Navigation activePage={activePage} setActivePage={setActivePage}/>
                {activePage === "planets" ? 
                    <Planets />
                 : 
                    <Starships />
                }
            </main>
            <footer className="footer">
                App created by <a className="link link--dark" href="https://github.com/claraizquierdo">Clara Izquierdo</a> with love
            </footer>
        </div>
    );
}

export default App;
