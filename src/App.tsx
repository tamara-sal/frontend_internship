
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NumberSelector from './NumberSelector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<NumberSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
