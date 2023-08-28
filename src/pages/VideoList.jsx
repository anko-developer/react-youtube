import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-use'
import VideoCard from '../components/VideoCard';

const getVideoData = async () => {
  const url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCXZ7Z4kXSe2VP-t-ThGEOR_nzF9OCOOro';
  const { data } = await axios.get(url);
  console.log(data.items);
  return  data.items;
};

export default function VideoList () {
  const state = useAsync(getVideoData);
  const { loading, error, value: videos } = state;

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러입니다</div>
  return (
    <div className='videoList' style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '8px'}}>
      {videos.map(video => (
        <VideoCard key={video.id} title={video.snippet.title} channel={video.snippet.channelTitle} thumbnail={video.snippet.thumbnails.high.url}  />
      ))}
    </div>
  )
}
