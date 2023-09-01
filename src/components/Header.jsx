import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import search from '../assets/images/icon-search.svg';
import styles from './Header.module.scss';
import classNames from 'classnames';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = e => {
    const text = e.target.value;
    setText(text);
  };
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className={classNames(styles.header, 'py-4')}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt='Youtube' />
      </Link>
      
      
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input type="text" placeholder='Search...' value={text} onChange={handleChange} />
          <button title="검색" className={styles.searchButton}>
            <span className={styles.searchIcon}>
            <img src={search} alt='search' />
            </span>
            <span className={styles.searchText}>검색</span>
          </button>
        </form>
      
    </header>
  );
}

