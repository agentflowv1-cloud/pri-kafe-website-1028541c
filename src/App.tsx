import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Promotions from './pages/Promotions';
import MenuPage from './pages/MenuPage';
import ContactForm from './pages/ContactForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotions />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;