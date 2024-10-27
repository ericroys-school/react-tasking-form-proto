import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../pages/error';
import { AboutPage } from '../pages/about';
import { TaskPage } from '../pages/tasks';

export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    errorElement: ErrorPage({}),
    children: [
      {
        index: true,
        element: TaskPage(),
      },
      {
        path: '/about',
        element: AboutPage(),
      },
    ],
  },
]);
