import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentItem = history[history.length - 1];

  const renderItems = () => {
    return currentItem.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <HeadlessTippy
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <MenuHeader
                title={history[history.length - 1].title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}

            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      interactive
      placement="bottom-end"
      delay={[200, 200]}
      offset={[12, 8]}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
