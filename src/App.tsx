import "./styles/global.css"

import Hero from './components/Hero'
import Intro from './components/Intro';
import Navbar from './components/Navbar'
import Featured from './components/Featured';
import Footer from "./components/Footer";

function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Intro />
        <Featured />
        <Footer />
        </>
    )
}

export default App;