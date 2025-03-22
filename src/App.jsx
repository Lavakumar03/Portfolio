import { ReactLenis } from 'lenis/react';
import './index.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Certification from "./components/Certification"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Certification />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default App;
