import { AUTH_API } from 'features/admin';
import useLocalStorage from 'hooks/useLocalStorage';
import { useMutateData } from 'lib/reactQuery';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  user: false,
  login: (email, password) => {},
  logout: () => {},
  isSuccess: false,
  error: null,
  isLoading: false,
  token: false,
});

export const AuthContextProvider = ({ children }) => {
  const { mutate, isLoading, error, data, isSuccess } = useMutateData(AUTH_API.LOGIN);

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser, clearUser] = useLocalStorage('user', false);
  const [token, setToken, clearToken] = useLocalStorage('tokens', false);

  const login = (email, password) => {
    const body = JSON.stringify({ email, password });
    mutate({ body: body });
  };

  const logout = () => {
    clearToken();
    clearUser();
  };

  //on login attempt
  useEffect(() => {
    if (isSuccess && data) {
      setToken(data.tokens);
      setUser(data.admin);
    }
  }, [isSuccess, data]);

  // on local storage change
  useEffect(() => {
    setIsAuth(user && token ? true : false);
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        user,
        login,
        logout,
        isSuccess,
        error,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
