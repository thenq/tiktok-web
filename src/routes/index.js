import routesConfig from '~/config/routes';
// layouts
import { HeaderOnly } from '~/components/Layouts';
// components
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.nickname,
    component: Profile,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
