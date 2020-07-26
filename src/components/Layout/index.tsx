import React from 'react';

import Router from '../../pages/router';

import './layout.scss';

function Layout(): JSX.Element {
  return (
    <div id="layout">
      <header>
        <h1>OpenVE</h1>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default Layout;
