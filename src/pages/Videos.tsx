import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/VideoCard/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword)
  })
  return (
    <section>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러 입니다.</p>}
      {videos && <div>
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </div>}
      Videos
    </section>
  );
}

