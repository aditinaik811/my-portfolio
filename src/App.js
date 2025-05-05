import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";


export default function App() {
  return (
    <Router>
      <h1 id="page_heading">Aditi Ravindra Naik</h1>
      <div className="main_div">
        <nav id="nav_bar">
          
          <div id="Link_list">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/skills" className="link">Skills</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/contact" className="link">Contact</Link>
          </div>
        </nav>
        <br></br><br></br>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}