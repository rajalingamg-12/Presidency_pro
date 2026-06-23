import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "././component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

import Home from "./pages/home/Home";
import AboutUs from"./pages/aboutus/Aboutus";
import Campuses from "./pages/campuses/Campuses";
import Programs from "./pages/programs/Programs";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Admission from "./pages/admission/Admission";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;