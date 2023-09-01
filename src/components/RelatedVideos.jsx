import React from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id), {staleTime: 1000 * 60 * 5});
  
  if (isLoading) return <div>로딩중...</div>
  if (error) return <div>에러...</div>

  return (
    <>
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

