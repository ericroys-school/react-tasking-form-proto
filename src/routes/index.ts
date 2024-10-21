import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/error';
import { AboutPage } from '../pages/about';

export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    errorElement: ErrorPage({}),
    children: [
      {
        index: true,
        element: AboutPage(),
      },
      {
        path: '/about',
        element: AboutPage(),
      },
    ],
  },
]);
