import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './components/Main';
import Navbar from './components/NavBar';
import About from './components/About';

function AppRoutes() {
  return (
    <>
      {/* <nav className="bg-gray-500">
        <Link to="/" className="text-white">Home</Link>
        <Link to="*" className="text-white">Projects</Link>
      </nav> */}

      <Header><Navbar /></Header>

      <Routes>
        <Route path="home" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
