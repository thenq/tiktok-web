import config from '~/config';
// layouts
import { HeaderOnly } from '~/layouts';
// components
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.nickname,
    component: Profile,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
