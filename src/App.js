import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import AppContainer from 'components/common/AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from 'components/common/ScrollToTop';
import { AuthContextProvider } from 'context/authContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Switch>
          <AuthContextProvider>
            <AppContainer>
              <AppRoutes />
            </AppContainer>
          </AuthContextProvider>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
