/*
 * @Author: JiaZhiteng
 * @Date: 2019-06-21 19:13:49
 * @Last Modified by: JiaZhiteng
 * @Last Modified time: 2019-06-21 20:11:38
 */

/*
    路由配置文件
*/

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../page/main')
  }
]

export default routes
