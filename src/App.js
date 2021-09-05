import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import AppContainer from 'components/common/AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
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
