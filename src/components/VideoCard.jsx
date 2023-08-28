import React from 'react';
import { Link } from 'react-router-dom';
import styles from  './VideoCard.module.scss';

export default function VideoCard({ title, channel, thumbnail, ...rest }) {
  return (
    <div className={styles.card}>
      <Link to='/videos/test'>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="썸네일" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.channel}>{channel}</p>
        </div>
      </Link>
    </div>
  );
}

