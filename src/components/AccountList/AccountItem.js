import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AccountList.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
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
  )
}

AccountItem.propTypes = {}

export default AccountItem
