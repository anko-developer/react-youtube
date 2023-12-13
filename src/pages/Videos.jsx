import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword)
  });
  console.log(videos);
  return (
    <section>
      {isLoading && <p>로딩중</p>}
      {error && <p>에러</p>}
      {videos && <ul className="grid grid-cols-4 gap-[16px]">
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>}
    </section>
  );
}

