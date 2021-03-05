/*
  - Routes involved in Next.js routing (main pages) should be used as "asyncComponent"
  - Routes involved in other Framework7 routers (in Views other than main View) should be imported and used directly as "component"
*/
import LeftPanel from './pages/left-panel';

export const routes = [
  {
    path: "/",
    asyncComponent: () => import("./pages/index"),
  },
  {
    path: "/left-panel",
    component: LeftPanel,
  },
  {
    path: "/about",
    asyncComponent: () => import("./pages/about"),
  },
  {
    path: '/blog/:postId',
    asyncComponent: () => import('./pages/blog/[postId]'),
  }
];