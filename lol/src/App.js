import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import StartPage from './components/pages/StartPage';
import Loading from './components/pages/Loading';
import MainPage from './components/pages/MainPage';
import BoxPage from './components/pages/BoxPage';
import NotePage from './components/pages/NotePage';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/box" element={<BoxPage />} />
        <Route path="/note" element={<NotePage />} />
      </Routes>
    </Router>
  )
}

export default App;
