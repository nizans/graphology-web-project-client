import { BASE_URL } from 'config/constants';
import { handleLoginSuccess } from 'lib/auth';
import { useState } from 'react';
import { _fetch } from 'utils/apiRequests';

const ADMIN_API = {
  LOGIN: (email, password) => ({
    url: new URL('/api/admin/login', BASE_URL),
    options: {
      method: 'post',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(email, password),
    },
  }),
};

export const useLoginRequest = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const reset = () => {
    setError(false);
    setSuccess(false);
    setIsFetching(false);
  };

  const login = async (email, password) => {
    setIsFetching(true);
    try {
      const { url, options } = ADMIN_API.LOGIN(email, password);
      const result = await _fetch(url, options);
      handleLoginSuccess(result);
      setSuccess(true);
      setIsFetching(false);
      return result.user;
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  return { isFetching, error, success, login, reset };
};
