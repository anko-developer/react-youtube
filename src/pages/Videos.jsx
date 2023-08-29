import React from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-use'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// import FakeYoutube from '../api/fakeYoutube'; 
import Youtube from '../api/youtube'; 
import VideoCard from '../components/VideoCard';

export default function Videos () {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    // const youtube = new FakeYoutube();
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
  };

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

  return (
    <div className='videos' style={style}>
      {videos.map(video => (
        <VideoCard key={video.id} title={video.snippet.title} video={video} />
      ))}
    </div>
  )
}
