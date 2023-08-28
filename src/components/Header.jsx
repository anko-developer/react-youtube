import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import search from '../assets/images/icon-search.svg';
import styles from './Header.module.scss';

export default function Nav() {
  const [text, setText] = useState('');
  const handleChange = e => {
    const text = e.target.value;
    setText(text);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(text);
    setText('');
  };

  return (
    <header className={styles.header}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt='Youtube' />
      </Link>
      
      <div className={styles.search}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleChange} />
        </form>
        <button title="검색" className={styles.searchButton} onClick={handleSubmit}>
          <span className={styles.searchIcon}>
          <img src={search} />
          </span>
          <span className={styles.searchText}>검색</span>
        </button>
      </div>
    </header>
  );
}

