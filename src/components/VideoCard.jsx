import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from  './VideoCard.module.scss';

export default function VideoCard({ video, ...rest }) {
  const { videoId } = useParams();
  return (
    <div className={styles.card}>
      <Link to={`/videos/watch/${videoId}`}>
        <div className={styles.thumbnail}>
          <img src={video.snippet.thumbnails.high.url} alt="썸네일" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{video.snippet.title}</h3>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </Link>
    </div>
  );
}

