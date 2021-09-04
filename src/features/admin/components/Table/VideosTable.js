import { useDeleteVideo, useFetchVideos } from 'features/videos';
import React, { useEffect } from 'react';
import Table from './Table';

const VideosTable = () => {
  const { isLoading, error, data } = useFetchVideos();
  const mutation = useDeleteVideo();

  return <Table type="videos" isLoading={isLoading} error={error} data={data} mutation={mutation} />;
};

export default VideosTable;
