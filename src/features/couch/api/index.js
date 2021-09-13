import { BASE_URL } from 'config/constants';

const CONTENTS_URL = new URL(BASE_URL + '/api/contents');
const requests = {
  GET_ALL: {
    query: ['contents'],
    url: CONTENTS_URL,
    options: { method: 'get' },
  },
  GET_BY_ID: id => ({
    query: ['contents', id],
    url: CONTENTS_URL,
    options: { method: 'get' },
  }),

  ADD: {
    query: ['contents'],
    url: CONTENTS_URL,
    options: { method: 'post' },
    body: {},
  },

  DELETE: {
    query: ['contents'],
    url: CONTENTS_URL,
    options: {
      method: 'delete',
    },
  },

  UPDATE: {
    query: ['contents'],
    url: CONTENTS_URL,
    options: { method: 'put' },
  },
};
export const CONTENTS_API = Object.freeze(requests);

// export const useFetchContents = params = {}) => {
//   const { query, url, options } = GET_ALL;
//   return useFetchData([query], url, options, params);
// };

// export const useFetchContent = id => {
//   const { query, url, options } = GET_BY_ID;
//   return useFetchData([query, id], url, options);
// };

// export function useDeleteContent() {
//   const { query, url, options } = DELETE;
//   return useDeleteMutation(query, url, options);
// }

// export const useAddContent = () => {
//   const { query, url, options } = ADD;
//   return useAddMutation(query, url, options);
// };

// export const useUpdateContent = () => {
//   const { query, url, options } = UPDATE;
//   return useUpdateMutation(query, url, options);
// };
