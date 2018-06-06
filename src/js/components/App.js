import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import { MainPage } from "./Main";
class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MainPage />
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export { App };