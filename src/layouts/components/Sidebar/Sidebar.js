import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'
import config from '~/config'
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons'
import AccountList from '~/components/AccountList'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('menu-block')}>
        <Menu>
          <MenuItem
            title="For You"
            to={config.routes.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          ></MenuItem>
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          ></MenuItem>
          <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}></MenuItem>
        </Menu>
      </div>
      <div className={cx('menu-block')}>
        <AccountList label="Suggested Accounts" />
      </div>
      <div className={cx('menu-block')}>
        <AccountList label="Following Accounts" isDisablePopover={true} />
      </div>
    </aside>
  )
}

export default Sidebar
