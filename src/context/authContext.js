import { AUTH_API } from 'features/admin';
import useLocalStorage from 'hooks/useLocalStorage';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useAddMutation, useMutateData } from 'lib/reactQuery';
import { useMutation } from 'react-query';

export const AuthContext = createContext({
  isAuth: false,
  user: null,
  login: (username, password) => {},
  isSuccess: false,
  error: null,
  isLoading: false,
});

export const AuthContextProvider = ({ children }) => {
  const { mutate: login, isLoading, error, data, isSuccess } = useMutateData(AUTH_API.LOGIN);

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser, clearUser] = useLocalStorage('user', false);
  const [token, setToken, clearToken] = useLocalStorage('tokens', false);

  let location = useLocation();

  //   //on authenticate requset
  //   useEffect(() => {
  //     if (!isAuthSuccess) {
  //       console.log('clearing tokens - auth faild');
  //       clearToken();
  //       clearUser();
  //     }
  //   }, [isAuthenticateing]);

  //   //on route change
  //   useEffect(() => {
  //     console.log('route change');
  //     if (isAuth) if (location.pathname.split('/')[1] === 'admin') authenticate();
  //   }, [location]);

  //on login attempt
  useEffect(() => {
    if (isSuccess && data) {
      console.log('setting token and users');
      setToken(data.tokens);
      setUser(data.admin);
    }
  }, [isSuccess, data]);

  // on local storage change
  useEffect(() => {
    console.log('local storage change');
    setIsAuth(user && token ? true : false);
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        user,
        login,
        isSuccess,
        error,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
