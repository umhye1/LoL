import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import StartPage from './components/pages/StartPage';
import MainPage from './components/pages/MainPage';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App;
