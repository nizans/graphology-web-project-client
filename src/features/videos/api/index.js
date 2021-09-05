import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useFetchVideos = (page, limit) => {
  return useQuery('videos', async () => {
    try {
      const res = await fetch('/api/videos');
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      throw error;
    }
  });
};

export const useFetchVideo = id => {
  return useQuery(['videos', id], async () => {
    try {
      const res = await fetch(`/api/videos/${id}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      throw error;
    }
  });
};

export const useDeleteVideo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'videos',
    async id => {
      try {
        const res = await fetch(`/api/videos/${id}`, { method: 'delete' });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        return data;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries('videos');
      },
    }
  );
};

export const useAddVideo = () => {
  return useMutation('videos', async video => {
    try {
      const res = await fetch('/api/videos', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      throw error;
    }
  });
};
