import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import { RouteTypes } from './types'

const AppRouter = ({ routes }: { routes: RouteTypes[] }) => (
  <Router>
    <Header />
    <Routes>
      {routes.map(({ name, path, guard: Guard, component: Component }: RouteTypes) => (
        <Route key={name} path={path} element={Guard(Component)} />
      ))}
    </Routes>
  </Router>
);

export default AppRouter;