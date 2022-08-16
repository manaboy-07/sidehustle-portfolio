/** @format */
import Contact from "./components/contact";
import About from "./components/About";
import Education from "./components/Education";
import Info from "./components/info";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Navbar />
          <Info />
          <About />
          <Contact />
          <Education />
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
