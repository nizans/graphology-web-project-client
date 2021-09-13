import { BASE_URL } from 'config/constants';

const BOOKS_URL = new URL(BASE_URL + '/api/books');
const requests = {
  GET_ALL: {
    query: ['books'],
    url: BOOKS_URL,
    options: { method: 'get' },
  },

  GET_BY_ID: id => ({
    query: ['books', id],
    url: BOOKS_URL,
    options: { method: 'get' },
  }),

  ADD: {
    query: ['books'],
    url: BOOKS_URL,
    options: { method: 'post' },
    body: {},
  },

  DELETE: {
    query: ['books'],
    url: BOOKS_URL,
    options: { method: 'delete' },
  },

  UPDATE: {
    query: ['books'],
    url: BOOKS_URL,
    options: { method: 'put' },
  },
};
export const BOOKS_API = Object.freeze(requests);
// export const useFetchBooks = (params = {}) => {
//   const { query, url, options } = GET_ALL;
//   return useFetchData([query], url, options, params);
// };

// export const useFetchBook = id => {
//   const { query, url, options } = GET_BY_ID;
//   return useFetchData([query, id], url, options);
// };

// export const useDeleteBook = () => {
//   const { query, url, options } = DELETE;
//   return useDeleteMutation(query, url, options);
// };

// export const useAddBook = () => {
//   const { query, url, options } = ADD;
//   return useAddMutation(query, url, options);
// };

// export const useUpdateBook = () => {
//   const { query, url, options } = UPDATE;
//   return useUpdateMutation(query, url, options);
// };
