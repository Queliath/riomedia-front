// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => (
  <div className="error" role="error">
    <span className="h4">Unexpected Application Error</span>
    <p className="error-text">{props.message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export { Error };