import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './components/Main';

function AppRoutes() {
  return (
    <>
      <nav className="bg-gray-500">
        <Link to="/" className="text-white">Home </Link>
        <Link to="*" className="text-white">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
