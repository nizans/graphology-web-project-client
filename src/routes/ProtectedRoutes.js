import AdminRoutes from 'features/admin/routes/AdminRoutes';
import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoutes = () => {
  return (
    <>
      <Route exact path="/admin">
        <AdminRoutes />
      </Route>
    </>
  );
};

export default ProtectedRoutes;
