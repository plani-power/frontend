import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/global';
import PlansPage from '../pages/plans/PlansPage';
import PlanPage from '../pages/plans/PlanPage';
import MainPage from 'pages/main/MainPage';
import Layout from 'common/layout/Layout';
import CreatePlan from '../pages/plans/createPlan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: ROUTES.plans.url,
          element: <PlansPage />,
          children: [
            {
              path: `${ROUTES.plans.url}/:planId`,
              element: <PlanPage />,
            },
          ]
      },
      {
        path: 'plans/createPlan',
        element: <CreatePlan />,
      }
    ]
  }
]);

export default router;