import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default App;
