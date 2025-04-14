import React from 'react';
import { appleImg, bagImg, searchImg } from '../../public/assets/images/index';

const navLists = ['Store', 'Mac', 'iPhone', 'Support'];

const Navbar = () => {
  return (
    <header className="relative screen-max-width navbar-container flex items-center justify-between">
      {/* Center Section: Apple Logo and Navigation Items */}
      <div className="flex items-center flex-grow justify-center space-x-6">
        <img
          src={appleImg}
          alt="Apple Logo"
          className="icon w-5 h-5 mr-4"
        />
        {navLists.map((nav, i) => (
          <span key={i} className="nav-item">
            {nav}
          </span>
        ))}
      </div>

      {/* Right Section: Search and Bag Icons */}
      <div className="absolute top-0 right-0 flex items-center space-x-4 p-4">
        <img
          src={searchImg}
          alt="Search Icon"
          className="icon w-5 h-5"
        />
        <img
          src={bagImg}
          alt="Bag Icon"
          className="icon w-5 h-5"
        />
      </div>
    </header>
  );
};

export default Navbar;
