import React from 'react';
import RouterView from './components/router-view';
import routerConfig from './router/router.config'; 
import {BrowserRouter as Router} from 'react-router-dom';
function App(){
  return <Router>
    <RouterView routes={routerConfig} />
  </Router>; 
}
export default App;