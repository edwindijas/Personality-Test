import React from 'react';
import { Router } from 'router/Router';
import { AppStateProvider } from 'state/AppStateProvider';
import GlobalCss from 'styles/global'

function App() {
  return (
    <AppStateProvider >
      <GlobalCss />
      <Router />
    </AppStateProvider>
  );
}

export default App;
