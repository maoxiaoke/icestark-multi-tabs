import { IRouterConfig } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        component: BasicLayout,
      },
    ],
  },
];
export default routerConfig;
