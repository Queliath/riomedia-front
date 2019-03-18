import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClientCard extends Component {

  render() {
    return (
      <div>
        <p>Id: { this.props.clientId }</p>
        <p>Name: { this.props.clientName }</p>
        <p>Icon URL: { this.props.clientIconUrl }</p>
        <p>Description: { this.props.clientDescription }</p>
      </div>
    );
  }

}

ClientCard.propTypes = {
  clientId: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  clientIconUrl: PropTypes.string.isRequired,
  clientDescription: PropTypes.string.isRequired
};

export { ClientCard };