import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBasicInfo } from '../../state/actions/BasicInfoActions';
import { Loading } from '../helpers/Loading';
import { Error } from '../helpers/Error';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBasicInfo();
  }

  render() {
    return (
      <div>
        {
          this.props.fetched && <div>{this.props.basicInfo.AppName}</div>
        }
        {
          <Loading busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch basic info" />
        }
      </div>
    );
  }
}

Home.propTypes = {
  fetchBasicInfo: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  basicInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state.basicInfo);
  const { fetching, fetched, failed, basicInfo } = state.basicInfo;

  return { fetching, fetched, failed, basicInfo };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchBasicInfo }, dispatch)
);

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);


export { HomePage };