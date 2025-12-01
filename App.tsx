
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Construction from './pages/Construction';
import RealEstate from './pages/RealEstate';
import Mines from './pages/Mines';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Order from './pages/Order';
import { PageRoutes } from './types';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path={PageRoutes.HOME} element={<Home />} />
              <Route path={PageRoutes.ABOUT} element={<About />} />
              <Route path={PageRoutes.CONSTRUCTION} element={<Construction />} />
              <Route path={PageRoutes.REAL_ESTATE} element={<RealEstate />} />
              <Route path={PageRoutes.MINES} element={<Mines />} />
              <Route path={PageRoutes.CAREER} element={<Career />} />
              <Route path={PageRoutes.CONTACT} element={<Contact />} />
              <Route path={PageRoutes.ORDER} element={<Order />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
