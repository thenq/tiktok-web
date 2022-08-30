import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AccountList.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function AccountItem({ isDisablePopover }) {
  const contentTippy = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx('popover-container')}>
            <div className={cx('popover-content')}>
              <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661929200&amp;x-signature=%2FnoeZLVddj3uJ%2FNx%2FySbrMpPZL8%3D"
                alt=""
              />

              <Button primary small>
                Follow
              </Button>
            </div>

            <div className={cx('popover-body')}>
              <div className={cx('user-info')}>
                <p className={cx('nickname')}>
                  <strong>TheNQ</strong>
                  <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>asd</p>
              </div>

              <p className={cx('analytics')}>
                <strong className={cx('value')}>47 </strong>
                <span className={cx('label')}>Followers</span>

                <strong className={cx('value')}>47 </strong>
                <span className={cx('label')}>Likes</span>
              </p>
            </div>
          </div>
        </PopperWrapper>
      </div>
    )
  }
  return (
    <>
      <Tippy
        disabled={isDisablePopover}
        offset={[-50, 0]}
        interactive
        delay={[500, 0]}
        render={contentTippy}
        placement="bottom"
      >
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661929200&amp;x-signature=%2FnoeZLVddj3uJ%2FNx%2FySbrMpPZL8%3D"
            alt=""
          />
          <div className={cx('user-info')}>
            <p className={cx('nickname')}>
              <strong>TheNQ</strong>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>asd</p>
          </div>
        </div>
      </Tippy>
    </>
  )
}

AccountItem.propTypes = {}

export default AccountItem
