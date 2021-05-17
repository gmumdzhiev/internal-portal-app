import { lazy } from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import TableComponent from '../pages/TableComponent';

const routes = [
  {
    name: 'Contact',
    path: '/contact',
    component: lazy(() => import('../pages/Contact')),
    exact: true,
    guard: null,
    index: 0,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true,
    guard: null,
    index: 1,
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
    guard: null,
    index: 2,
  },
  {
    name: 'Table',
    path: '/table',
    component: TableComponent,
    exact: true,
    guard: null,
    index: 3,
  },
];

export default routes;
