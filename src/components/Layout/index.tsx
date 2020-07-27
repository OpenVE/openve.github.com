import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from '../Header';
import Router from '../../pages/router';

function Layout(): JSX.Element {
  return (
    <HashRouter>
      <div id="layout">
        <Header />
        <Router />
      </div>
    </HashRouter>
  );
}

export default Layout;
