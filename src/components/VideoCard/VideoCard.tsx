import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;
  return (
    <div onClick={() => navigate(`/videos/watch/${video.id}`, { state: { video } })}>
      <img src={thumbnails.medium.url} alt={title} />
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <p>{publishedAt}</p>
    </div>
  );
}

