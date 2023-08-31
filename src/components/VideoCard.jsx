import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import formatAgo from '../util/date';
import styles from  './VideoCard.module.scss';


export default function VideoCard({ video, ...rest }) {
  const { videoId } = useParams();
  const { title, channelTitle, publishedAt, thumbnails  } = video.snippet;
  return (
    <li>
      <Link to={`/videos/watch/${videoId}`}>
        <div className={styles.thumbnail}>
          <img src={thumbnails.medium.url} alt="썸네일" />
        </div>
        <div className={styles.content}>
          <h3 className={classNames(styles.title, 'line-clamp-3')}>{title}</h3>
          <p className={styles.channel}>{channelTitle}</p>
          <p className={styles.publishedAt}>{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </Link>
    </li>
  );
}

