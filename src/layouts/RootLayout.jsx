/** @format */

import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <div className="py-3 bg-pink-400 text-white">
        <p className="text-xs text-center">
          Welcome to the 3bit Dental Space_Connecting Retirement Homes to
          Dentists nearby
        </p>
      </div>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
