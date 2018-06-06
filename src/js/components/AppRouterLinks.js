import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

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
  }
];