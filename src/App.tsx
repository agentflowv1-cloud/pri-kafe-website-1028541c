import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Promotions from './pages/Promotions';
import './App.css';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;