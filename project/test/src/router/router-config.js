/*
 * @Author: JiaZhiteng
 * @Date: 2019-06-21 19:13:49
 * @Last Modified by: JiaZhiteng
 * @Last Modified time: 2019-07-09 21:07:00
 */

/*
    路由配置文件
*/

const routes = [
  {
    path: '/',
    redirect: '/egg'
  },
  {
    path: '/home',
    component: () => import('../page/main')
  },
  {
    path: '/on',
    component: () => import('../page/publish')
  },
  {
    path: '/egg',
    component: () => import('../page/egg')
  }
]

export default routes
