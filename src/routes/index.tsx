import { useRoutes } from 'react-router-dom';

import { Home, NotFound } from '../pages';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
}
