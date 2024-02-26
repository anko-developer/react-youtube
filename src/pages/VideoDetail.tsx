import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video }
  } = useLocation();
  const { title, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe id='player' type='text/html' width='100%' height='640' title={title} src={`https://www.youtube.com/embed/${video.id}`} />
        <div>
          <h2>{title}</h2>
          <strong>{channelTitle}</strong>
          <pre>{description}</pre>
        </div>
      </article>
    </section>
  );
}

