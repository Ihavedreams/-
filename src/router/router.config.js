import Login from '../page/login';
import Main from '../page/main';
import Abc from '../page/abc';
import Bbc from '../page/bbc';
const routerConfig = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main,
    routes: [
      {
        path: '/abc',
        component: Abc
      },
      {
        path: '/Bbc',
        component: Bbc
      }
        
    ]
  }
];

export default routerConfig;