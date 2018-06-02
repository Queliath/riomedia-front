import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBasicInfo } from '../actions/index';

const mapStateToProps = state => {
  return {
    basicInfo: state.basicInfo,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBasicInfo: () => dispatch(fetchBasicInfo())
  };
};

class ConnectedApp extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.props.isFetching ? 'Loading...' : this.props.basicInfo.AppName}
          </h1>
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBasicInfo();
  }

}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
