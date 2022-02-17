import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<p>Hello world</p>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
