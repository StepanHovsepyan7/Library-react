import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import App from './App';

function Root() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout searchQuery={searchItem} setSearchItem={setSearchItem} />}
        >
          <Route
            path="/"
            element={<App searchItem={searchItem} setSearchItem={setSearchItem} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
