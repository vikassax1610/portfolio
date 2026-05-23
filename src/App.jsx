import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
