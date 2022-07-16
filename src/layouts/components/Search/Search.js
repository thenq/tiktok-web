import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import * as searchService from '~/services/searchService';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const lastSearchValue = useDebounce(searchValue, 500);

  const searchInputRef = useRef();

  useEffect(() => {
    if (!lastSearchValue.trim()) {
      setSearchResult([]);
      return;
    }

    // setLoadingSearch(true);
    // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(lastSearchValue)}&type=less`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSearchResult(res.data);
    //     setLoadingSearch(false);
    //   })
    //   .catch((err) => {
    //     setLoadingSearch(false);
    //   });

    // axios
    //   .get('https://tiktok.fullstack.edu.vn/api/users/search', {
    //     params: {
    //       q: encodeURIComponent(lastSearchValue),
    //       type: 'less',
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });

    setLoadingSearch(true);
    const fetchApi = async () => {
      try {
        const res = await searchService.search(lastSearchValue);
        setSearchResult(res.data);
        setLoadingSearch(false);
      } catch (error) {
        setLoadingSearch(false);
        throw new Error(error);
      }
    };

    fetchApi();
  }, [lastSearchValue]);

  const handleClearSearch = () => {
    setSearchValue('');
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((account) => (
                <AccountItem key={account.id} data={account} onClick={handleClearSearch} />
              ))}
            </PopperWrapper>
          </div>
        )}
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={searchInputRef}
            value={searchValue}
            placeholder="Search account and video"
            spellCheck={false}
            onChange={handleSearchInputChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loadingSearch && (
            <button className={cx('clear')} onClick={handleClearSearch}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loadingSearch && (
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
          )}
          <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
