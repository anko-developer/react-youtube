import React from 'react';
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <div onClick={handleClick}>
      <img src={thumbnails.medium.url} alt={title} />
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <p>{publishedAt}</p>
    </div>
  );
}

