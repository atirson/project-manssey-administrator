import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@app/core/services/queryClient';
import { Provider } from 'react-redux';
import { store } from '@app/core/store';
import Routes from '@core/config/routes';

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>

  );
}
