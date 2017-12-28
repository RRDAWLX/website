import Home from 'views/Home/index';
import Test from 'views/Test/index';

let routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },

  {
    path: '/test',
    component: Test,
    exact: true,
    routes: [
      {
        path: '/test/2',
        component: Test
      }
    ]
  }
];

export default routes;