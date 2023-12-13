import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, description, thumbnails } = video.snippet;
  const handleClick = () => {
    navigate(`/video/watch/${video.id}`, { state: {video} });
  };
  
  return (
    <div className="border rounded-[8px] p-[12px]" onClick={handleClick}>
      <img src={thumbnails.medium.url} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

