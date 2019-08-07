/* eslint-disable */
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router/router'; // 方法
import routerConfig from './router/router.config'; // 表

function App() {
  return (
    <Router>
      <RouterView data={routerConfig}></RouterView>
    </Router>
  );
}

export default App;
