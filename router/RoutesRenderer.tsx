import React, { Suspense, Fragment, FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../components/loader/Loader';

import AuthGuard from '../components/guard/AuthGuard';
import { lazy } from 'react';
import MainContent from '../components/common/layouts/MainContent';
import FirstLayout from '../components/common/layouts/FirstLayout';
import Home from '../pages/Home';
// import TableComponent from '../pages/TableComponent';
import Login from '../pages/Login';

import Drawer from '../components/drawer/Drawer';
const routes = [
  {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    exact: true,
    layout: MainContent,
    guard: AuthGuard,
  },

  // {
  //   path: '/error',
  //   component: lazy(() => import('../pages/Error')),
  //   exact: true,
  //   layout: MainContent,
  // guard: AuthGuard,
  // },
  {
    path: '/table',
    component: Drawer,
    exact: true,
    layout: MainContent,
    // guard: AuthGuard,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    layout: FirstLayout,
    guard: null,
  },
  {
    path: '/',
    component: Home,
    exact: true,
    layout: MainContent,
    guard: AuthGuard,
  },
];

export const RoutesRenderer: FC = () => {
  return renderRoutes(routes);
};

export const renderRoutes = (routes: any[]) => {
  return (
    <Suspense fallback={<Loader />}>
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((route, i) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          const Guard = route.guard || Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props: JSX.IntrinsicAttributes) => (
                <Guard>
                  <Layout>
                    {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};
