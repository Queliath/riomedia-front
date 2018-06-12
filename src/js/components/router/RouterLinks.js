import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ClientList } from "../clients/ClientsList";

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    label: 'Главная'
  },
  {
    path: '/about',
    component: AboutPage,
    label: 'О нас'
  },
  {
    path: '/test-clients',
    component: ClientList,
    label: 'Жорик не балуй)'
  }
];