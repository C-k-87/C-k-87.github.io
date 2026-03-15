import "./styles/global.css"

import Hero from './components/Hero'
import Intro from './components/Intro';
import Navbar from './components/Navbar'
import Featured from './components/Featured';

function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Intro />
        <Featured />
        </>
    )
}

export default App;