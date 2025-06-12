import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Layout({ searchQuery, setSearchItem }) {
  return (
    <div>
      <Header searchQuery={searchQuery} setSearchItem={setSearchItem} />
      <Outlet />
    </div>
  );
}

export default Layout;
