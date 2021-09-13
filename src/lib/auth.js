import storage from 'utils/storage';

export const handleLoginSuccess = async userInfo => {
  storage.setToken(userInfo);
};

export const handleLogut = () => {
  storage.clearToken();
  window.location.assign(window.location.origin);
};

export const getCurrentUser = () => {
  const localData = storage.getToken();
  let user = null;
  if (localData) user = localData.user;
  return user || null;
};

