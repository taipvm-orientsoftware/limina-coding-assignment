import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../components';
import Routes from '../routes';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
