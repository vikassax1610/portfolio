import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SectionLoader from "./components/SectionLoader";
import { initGA, trackPageView } from "./analytics";

const HomePage = lazy(() => import("./pages/HomePage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

const PageLoader = () => <SectionLoader fullScreen />;

/** Tracks SPA page views on every route change. */
function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);
  return null;
}

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  // Initialise GA4 once on mount
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <RouteTracker />
      <Navbar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
