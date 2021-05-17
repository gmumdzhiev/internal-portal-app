import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesRenderer } from './router/RoutesRenderer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RoutesRenderer />
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
