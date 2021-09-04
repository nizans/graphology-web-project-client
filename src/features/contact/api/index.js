import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useFetchContents = (page, limit) => {
  return useQuery('contents', async () => {
    try {
      const res = await fetch('/api/contents');
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

export const useFetchContent = id => {
  return useQuery(['contents', id], async () => {
    try {
      const res = await fetch(`/api/contents/${id}`);
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

export const useDeleteContent = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'contents',
    async id => {
      try {
        const res = await fetch(`/api/contents/${id}`, { method: 'delete' });
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
        queryClient.invalidateQueries('contents');
      },
    }
  );
};

export const useAddContent = () => {
  return useMutation('contents', async content => {
    try {
      const res = await fetch('/api/contents', {
        method: 'post',
        headers: new Headers({
          Accept: 'application/json',
        }),
        body: content,
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
