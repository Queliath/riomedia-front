import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router as AppRouter } from "./router/Router";
import { fetchBasicInfo } from '../state/actions/BasicInfoActions';
import { MainLoader } from "./helpers/MainLoader";
import {Error} from "./helpers/Error";

class Main extends Component {
  componentDidMount() {
    this.props.fetchBasicInfo();
  }

  render() {
    return (
      <div className="rio-container">
        {
          this.props.fetched && <AppRouter basicInfo={ this.props.basicInfo }/>
        }
        {
          <MainLoader busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch basic info" />
        }
      </div>
    );
  }
}

Main.propTypes = {
  fetchBasicInfo: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  basicInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { fetching, fetched, failed, basicInfo } = state.basicInfo;

  return { fetching, fetched, failed, basicInfo };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchBasicInfo }, dispatch)
);

let MainPage = connect(mapStateToProps, mapDispatchToProps)(Main);

export { MainPage };