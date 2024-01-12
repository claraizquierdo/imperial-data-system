import '../css/components/App.scss';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Planets from './Planets';
import Starships from './Starships';
import {useState} from 'react';

function App() {
    const [activePage, setActivePage] = useState("planets");
    return (
        <div>
            <Header/>
            <main className="main">
                <Navigation activePage={activePage} setActivePage={setActivePage}/>
                {activePage === "planets" ? 
                    <Planets />
                 : 
                    <Starships />
                }
            </main>
            <Footer/>
        </div>
    );
}

export default App;
