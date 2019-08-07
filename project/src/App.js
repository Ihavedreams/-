import './App.css';

import Index from './pages/index';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Index />
      </Router>
    </div>
  );
}

export default App;
