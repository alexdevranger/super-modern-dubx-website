import Home from "./pages/Home";
import Send from "./pages/Send";
import About from "./pages/About";
import { Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/send" element={<Send />} />
          <Route exact path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
