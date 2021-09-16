import { AUTH_URL } from 'config/constants';

export const AUTH_API = {
  LOGIN: {
    query: 'login',
    url: new URL('/auth/login', AUTH_URL),
    options: {
      method: 'post',
      headers: new Headers({ 'content-type': 'application/json' }),
    },
  },
  AUTHENTICATE: token => ({
    query: 'login',
    url: new URL('/auth/authenticate', AUTH_URL),
    options: {
      method: 'options',
      headers: new Headers({ Authorization: 'Bearer ' + token }),
    },
  }),
};
