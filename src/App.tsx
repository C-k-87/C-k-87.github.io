import "./styles/global.css"

import Hero from './components/Hero'
import Intro from './components/Intro';
import Navbar from './components/Navbar'
import Featured from './components/Featured';
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Intro />
        <Featured />
        <Contact />
        <Footer />
        </>
    )
}

export default App;