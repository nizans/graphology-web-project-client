import { BASE_URL } from 'config/constants';


const ARTICLES_URL = new URL(BASE_URL + '/api/articles');
const requests = {
  GET_ALL: {
    query: ['articles'],
    url: ARTICLES_URL,
    options: { method: 'get' },
  },
  GET_BY_ID: id => ({
    query: ['articles', id],
    url: ARTICLES_URL,
    options: { method: 'get' },
  }),

  ADD: {
    query: ['articles'],
    url: ARTICLES_URL,
    options: { method: 'post' },
    body: {},
  },

  DELETE: {
    query: ['articles'],
    url: ARTICLES_URL,
    options: { method: 'delete' },
  },

  UPDATE: {
    query: ['articles'],
    url: ARTICLES_URL,
    options: { method: 'put' },
  },
};
export const ARTICLES_API = Object.freeze(requests);
// export const useFetchArticles = (params = {}) => {
//   const { query, url, options } = GET_ALL;
//   return useFetchData([query], url, options, params);
// };

// export const useFetchArticle = id => {
//   const { query, url, options } = GET_BY_ID;
//   return useFetchData([query, id], url, options);
// };

// export const useDeleteArticle = () => {
//   const { query, url, options } = DELETE;
//   return useDeleteMutation(query, url, options);
// };

// export const useAddArticle = () => {
//   const { query, url, options } = ADD;
//   return useAddMutation(query, url, options);
// };

// export const useUpdateArticle = () => {
//   const { query, url, options } = UPDATE;
//   return useUpdateMutation(query, url, options);
// };
