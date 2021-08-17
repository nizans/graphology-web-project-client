import React from 'react';
import AdminMain from './AdminMain';
import Articles from './Articles';
import Login from './Login';

const Admin = () => {
  return (
    <div className="container h-screen flex justify-center items-center">
      {/* <Login /> */}
      <Articles />
    </div>
  );
};

export default Admin;
