import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MarketingPage from './MarketingPage';
import SignUp from './SignUpPage';
import SignIn from './SignInPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* other routes */}
    </Routes>
  );
}

export default AppRouter;
