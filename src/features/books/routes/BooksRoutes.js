import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import OrderBook from './OrderBook';
import Books from './Books';

export const BooksRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`}>
        <Books />
      </Route>
      <Route path={`${path}/:bookId`}>
        <OrderBook />
      </Route>
    </>
  );
};
