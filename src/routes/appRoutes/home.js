import { lazy } from 'react';

const mainPath = '/app/home';
const Home = lazy(() => import('src/containers/pages/MainApp/index'));

const home = [
  {
    key: 'ehhe',
    path: `${mainPath}`,
    component: Home,
    exact: true,
  },
];

export default home;
