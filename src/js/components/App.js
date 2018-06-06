import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import { Router as AppRouter } from "./router/Router";

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppRouter />
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export { App };