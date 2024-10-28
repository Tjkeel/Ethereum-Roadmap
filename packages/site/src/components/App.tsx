import { Router } from '~/components/Router';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './Home';

const helmetContext = {};

export function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Router />
    </HelmetProvider>
  );
}