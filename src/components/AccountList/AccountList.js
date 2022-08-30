import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import AccountItem from './AccountItem'
import styles from './AccountList.module.scss'

const cx = classNames.bind(styles)

function AccountList({ label, isDisablePopover = false }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem isDisablePopover={isDisablePopover} />

      <div className={cx('load-more')}>See all</div>
    </div>
  )
}

AccountList.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AccountList
