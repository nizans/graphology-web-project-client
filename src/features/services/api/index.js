import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useFetchServices = () => {
  return useQuery('services', async () => {
    try {
      const res = await fetch('/api/services');
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

export const useFetchService = id => {
  return useQuery(['services', id], async () => {
    try {
      const res = await fetch(`/api/services/${id}`);
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

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation(
    'services',
    async id => {
      try {
        const res = await fetch(`/api/services/${id}`, { method: 'delete' });
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
        queryClient.refetchQueries('services');
      },
    }
  );
};

export const useAddService = () => {
  return useMutation('services', async service => {
    try {
      const res = await fetch('/api/services', {
        method: 'post',
        headers: new Headers({
          Accept: 'application/json',
        }),
        body: service,
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
