import React from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: url } = useQuery(['channel', id], () => youtube.channelImageURL(id), {staleTime: 1000 * 60 * 5});
  
  if (isLoading) return <div>로딩중...</div>
  if (error) return <div>에러...</div>

  return (
    <div className='flex my-4 mb-8 items-cetner'>
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-log font-medium ml-2'>{name}</p>
    </div>
  );
}

