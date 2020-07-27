import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

const Header = (): JSX.Element => (
  <nav className="flex items-center justify-between bg-gray-900 p-4 box-border">
    <div className="flex items-center flex-shrink-0 text-white">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
    <div className="w-full block flex-grow">
      <div className="flex-grow">
        <NavLink to="about">Acerca</NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
