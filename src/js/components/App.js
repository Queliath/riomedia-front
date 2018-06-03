import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../state/store/AppStore';
import { AppRouter } from './AppRouter';

export const App = () => (
  <Provider store={createAppStore()}>
    <div className="container">
      <AppRouter />
    </div>
  </Provider>
);