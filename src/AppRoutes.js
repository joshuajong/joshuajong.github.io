import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Navbar from './components/NavBar';
import About from './pages/About';
import Thoughts from './pages/Thoughts';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import InvestmentCalculator from './pages/InvestmentCalculator';

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path="home" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="thoughts" element={<Thoughts />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="investment_calculator" element={<InvestmentCalculator />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default AppRoutes;
