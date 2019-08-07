import Home from '../view/home';
import Index from '../view/index';
import Hot from '../view/index/hot';
import Cold from '../view/index/cold';
/* eslint-disable */
export default {
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
		 	path: '/home',
		 	component: Home
    }, 
    {
		 	path: '/index',
		 	component: Index,
		 	children: [
        {
          path: '/index',
          redirect: '/index/hot'
        },
        {
          path: '/index/hot',
          component: Hot
		 		},
		 		{
          path: '/index/cold',
          component: Cold
		 		}
		 	]
    }
  ]
};