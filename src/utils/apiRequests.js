import { useQuery, useMutation, useQueryClient } from 'react-query';

export const setParams = (url, params) => {
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
};

export function useFetchData(apiRequest, queryParams = {}) {
  const { query, url, options } = apiRequest;
  const _url = new URL(query.join('/'), url);
  if (queryParams) setParams(_url, queryParams);
  return useQuery([...query, queryParams], () => _fetch(_url, options), {
    staleTime: 1000 * 60 * 15,
  });
}

export function useAddMutation(apiRequest, refetch = true) {
  const queryClient = new useQueryClient();
  const { query, url, options } = apiRequest;
  return useMutation(
    async data => {
      options.body = data;
      return await _fetch(url, options);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(query);
      },
    }
  );
}

export function useDeleteMutation(apiRequest) {
  const queryClient = new useQueryClient();
  const { query, url, options } = apiRequest;

  return useMutation(
    async id => {
      const _url = new URL(query + '/' + id, url);
      return await _fetch(_url, options);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(query);
      },
    }
  );
}

export function useUpdateMutation(apiRequest) {
  const queryClient = new useQueryClient();
  const { query, url, options } = apiRequest;
  return useMutation(
    query,
    async id => {
      const _url = new URL(query + '/' + id, url);
      return _fetch(_url, options);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(query);
      },
    }
  );
}

export const _fetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
