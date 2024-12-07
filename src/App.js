import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './assets/scss/main.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Hero/>
                <About/>
                <Works/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
