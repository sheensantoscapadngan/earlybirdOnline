import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './components/styles/Global';
import LoginPage from './components/login/LoginPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='*' element={<h1>HELLO WORLD</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
