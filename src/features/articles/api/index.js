import ApiCRUDRequests from 'ApiRequest';
// import { BASE_URL } from 'config/constants';

// const ARTICLES_URL = new URL(BASE_URL + '/api/articles');
// const requests = {
//   GET_ALL: {
//     query: ['articles'],
//     url: ARTICLES_URL,
//     options: { method: 'get' },
//   },
//   GET_BY_ID: id => ({
//     query: ['articles', id],
//     url: ARTICLES_URL,
//     options: { method: 'get' },
//   }),
//   ADD: {
//     query: ['articles'],
//     url: ARTICLES_URL,
//     options: { method: 'post' },
//     body: {},
//   },

//   DELETE: {
//     query: ['articles'],
//     url: ARTICLES_URL,
//     options: { method: 'delete' },
//   },

//   UPDATE: {
//     query: ['articles'],
//     url: ARTICLES_URL,
//     options: { method: 'put' },
//   },
// };
// export const ARTICLES_API = Object.freeze(requests);

const ARTICLES_QUERY = 'articles';

class ArticlesApiCRUDRequests extends ApiCRUDRequests {
  constructor() {
    super(ARTICLES_QUERY);
  }
}
export const articlesApiCRUDRequests = new ArticlesApiCRUDRequests();
