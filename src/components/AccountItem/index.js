import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
      <Image className={cx('avatar')} src={data.avatar} alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
        </h4>

        <p className={cx('user-name')}>{data.nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
