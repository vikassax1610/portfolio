import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
