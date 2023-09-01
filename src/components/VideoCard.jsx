import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import formatAgo from '../util/date';
import styles from  './VideoCard.module.scss';


export default function VideoCard({ video, type, ...rest }) {
  const { title, channelTitle, publishedAt, thumbnails  } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li 
      className={isList ? 'flex gap-1 m-2': ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      
      <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title} />
      
      <div className={styles.content}>
        <h3 className={classNames(styles.title, 'line-clamp-3')}>{title}</h3>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.publishedAt}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

