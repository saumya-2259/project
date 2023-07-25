import React from "react";
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Contact from './Contact';
import Center from './Center';
function App(){
    return (
        <div>
        <Navbar />
        <Slideshow />
        <Center />
        <Contact />
        </div>
    );
}
export default App;