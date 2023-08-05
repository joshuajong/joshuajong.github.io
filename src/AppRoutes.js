import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Navbar from './components/NavBar';
import About from './pages/About';
import Thoughts from './pages/Thoughts';
import Contact from './pages/Contact';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
