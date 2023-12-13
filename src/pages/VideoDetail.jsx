import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video }
  } = useLocation();
  const { title, description } = video.snippet;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

