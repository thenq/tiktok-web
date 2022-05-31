// layouts
import { HeaderOnly } from '~/components/Layouts';
// components
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/@:nickname',
    component: Profile,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
