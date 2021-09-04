import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useFetchArticles = (page, limit) => {
  return useQuery('articles', async () => {
    try {
      const res = await fetch('/api/articles');
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

export const useFetchAtricle = id => {
  return useQuery(['articles', id], async () => {
    try {
      const res = await fetch(`/api/articles/${id}`);
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

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'articles',
    async id => {
      try {
        const res = await fetch(`/api/articles/${id}`, { method: 'delete' });
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
        queryClient.invalidateQueries('articles');
      },
    }
  );
};

export const useAddArticle = () => {
  return useMutation('articles', async article => {
    try {
      const res = await fetch('/api/articles', {
        method: 'post',
        headers: new Headers({
          Accept: 'application/json',
        }),
        body: article,
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
