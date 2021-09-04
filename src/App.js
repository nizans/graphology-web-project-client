import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Switch, useLocation } from 'react-router-dom';
import useDimensions from 'helpers/useDimensions';
import Header from 'components/header/Header.js';
import Main from 'components/common/Main';
import Footer from 'components/footer/Footer';
import AppRoutes from 'routes/AppRoutes';

import PublicRoutes from './routes/PublicRoutes';
import AppContainer from 'components/common/AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  //   const [headerRef, headerDimension] = useDimensions();
  //   const [footerRef, footerDimension] = useDimensions();
  //   const [headerHeight, setHeaderHeight] = useState();
  //   const [footerHeight, setfooterHeight] = useState();
  //   const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  //   useEffect(() => {
  //     if (headerDimension && footerDimension) {
  //       setHeaderHeight(headerDimension.height);
  //       setfooterHeight(footerDimension.height);
  //     }
  //   }, [headerDimension, footerDimension]);
  //   useEffect(() => {
  //     setHideHeaderFooter(location.pathname.includes('/admin'));
  //   }, [location.pathname]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
