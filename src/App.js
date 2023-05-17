import "./App.css";
import Navbar from "./Componants/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Componants/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
