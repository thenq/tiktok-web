import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          title: 'English',
          value: 'en',
        },
        {
          title: 'Vietnamese',
          value: 'vi',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState(['ádf']);

  useEffect(() => {
    setSearchResult(['asdad']);
  }, []);

  const handleMenuChange = (onChange) => {
    console.log(onChange);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="logo" />

        <Tippy
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                text
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
          visible={searchResult.length > 0}
          interactive={true}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and video" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button text medium>
            Upload
          </Button>
          <Button primary medium>
            Login
          </Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
