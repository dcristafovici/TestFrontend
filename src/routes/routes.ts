import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { DefaultGuard } from './Guards';
import { RoutesDetailsTypes, RoutesNavigationTypes, RouteTypes } from './types';

export const RoutesDetailes: RoutesDetailsTypes = {
  HOME_PAGE: {
    name: 'Home',
    path: '/',
    exact: true,
  },
  REGISTER: {
    name: 'Register',
    path: '/register',
  },
  LOGIN: {
    name: 'Login',
    path: '/login'
  }
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    exact: RoutesDetailes.HOME_PAGE.exact,
    guard: DefaultGuard,
    component: Home,
  },
  {
    name: RoutesDetailes.REGISTER.name,
    path: RoutesDetailes.REGISTER.path,
    guard: DefaultGuard,
    component: Register
  },
  {
    name: RoutesDetailes.LOGIN.name,
    path: RoutesDetailes.LOGIN.path,
    guard: DefaultGuard,
    component: Login,
  }
];

export const HeaderNavigationItems: RoutesNavigationTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
  },
  {
    name: RoutesDetailes.REGISTER.name,
    path: RoutesDetailes.REGISTER.path,
  },
  {
    name: RoutesDetailes.LOGIN.name,
    path: RoutesDetailes.LOGIN.path
  }
];

export default routes;