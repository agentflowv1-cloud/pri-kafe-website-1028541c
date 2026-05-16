import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;