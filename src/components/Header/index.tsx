import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

const Header = (): JSX.Element => (
  <nav className="flex justify-between bg-gray-900 px-3 box-border">
    <div className="flex">
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink to="about">Acerca</NavLink>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <a
        target="_blank"
        href="https://t.me/openve"
        rel="noopener noreferrer"
        className="block bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
      >
        Habla con Nosotros
      </a>
    </div>
  </nav>
);

export default Header;
