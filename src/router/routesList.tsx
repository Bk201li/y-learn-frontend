import { lazy } from 'react';
import IRoute from "../types/routes.type";

const Dashboard = lazy(() => import('../pages/dashboard'));


const routesList: IRoute[] = [
  {
    path: '/',
    element: Dashboard,
  },
]

export default routesList;
