import { BASE_URL } from 'config/constants';

const VIDEOS_URL = new URL(BASE_URL + '/api/videos');
const requests = {
  GET_ALL: {
    query: ['videos'],
    url: VIDEOS_URL,
    options: { method: 'get' },
  },
  GET_BY_ID: id => ({
    query: ['videos', id],
    url: VIDEOS_URL,
    options: { method: 'get' },
  }),

  ADD: {
    query: ['videos'],
    url: VIDEOS_URL,
    options: { method: 'post', headers: new Headers({ 'Content-Type': 'application/json' }) },
    body: {},
  },

  DELETE: {
    query: ['videos'],
    url: VIDEOS_URL,
    options: { method: 'delete' },
  },

  UPDATE: {
    query: ['videos'],
    url: VIDEOS_URL,
    options: { method: 'put' },
  },
};
export const VIDEOS_API = Object.freeze(requests);

// export const useFetchVideos = (params = {}) => {
//   const { query, url, options } = GET_ALL;
//   return useFetchData([query], url, options, params);
// };

// export const useFetchVideo = id => {
//   const { query, url, options } = GET_BY_ID;
//   return useFetchData([query, id], url, options);
// };

// export function useDeleteVideo() {
//   const { query, url, options } = DELETE;
//   return useDeleteMutation(query, url, options);
// }

// export const useAddVideo = () => {
//   const { query, url, options } = ADD;
//   return useAddMutation(query, url, options);
// };

// export const useUpdateVideo = () => {
//   const { query, url, options } = UPDATE;
//   return useUpdateMutation(query, url, options);
// };
