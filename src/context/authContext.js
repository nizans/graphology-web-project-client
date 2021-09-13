import { useLoginRequest } from 'features/admin';
import { getCurrentUser } from 'lib/auth';
import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  user: null,
  setUser: user => {},
  setIsAuth: isAuth => {},
  login: (username, password) => {},
  success: false,
  error: null,
  isFetching: false,
  reset: () => {},
  isLazyLoading: false,
  setIsLazyLoading: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const { isFetching, error, success, login, reset } = useLoginRequest();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [isLazyLoading, setIsLazyLoading] = useState(false);

  //On first mount
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  //on successful login
  useEffect(() => {
    setUser(getCurrentUser());
  }, [success]);

  // on user change
  useEffect(() => {
    setIsAuth(user ? true : false);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        login,
        success,
        error,
        isFetching,
        reset,
        isLazyLoading,
        setIsLazyLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
