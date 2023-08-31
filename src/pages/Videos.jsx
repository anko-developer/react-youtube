import React from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-use'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/youtubeApiContext';

export default function Videos () {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  // const getVideoData = async () => {
  //   const url = `/videos/${keyword ? 'search' : 'popular'}.json`;
  //   const { data } = await axios.get(url);
  //   console.log(data.items);
  //   return data.items;
  // };
  // const state = useAsync(getVideoData);
  // const { loading, error, value: videos } = state;

  if (isLoading) return <div>로딩중</div>
  if (error) return <div>에러입니다</div>
  console.log(videos);
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  )
}
