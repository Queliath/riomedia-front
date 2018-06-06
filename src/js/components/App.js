import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../state/store/AppStore';
import { AppRouter } from './AppRouter';

class App extends React.Component {
  render() {
    return (
      <Provider store={ createAppStore() }>
        <AppRouter />
      </Provider>
    )
  }
}

export {App};