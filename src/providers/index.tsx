import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import { store } from 'store';

function ErrorFallback() {
  return <div>Somthing Went Wrong..</div>;
}

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GlobalStyle />
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
