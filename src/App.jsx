import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SectionLoader from "./components/SectionLoader";
const HomePage = lazy(() => import("./pages/HomePage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

const PageLoader = () => <SectionLoader fullScreen />;
function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
