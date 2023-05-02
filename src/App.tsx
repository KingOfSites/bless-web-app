import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Index';
import SignUp from './pages/SignUp/Index';
import ForgotPassword from './pages/ForgotPassword/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}  />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;