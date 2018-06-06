// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

const MainError = (props) => (
  <div className="error">
    <span className="h4">Unexpected Application Error</span>
    <p className="error-text">{props.message}</p>
  </div>
);

MainError.propTypes = {
  message: PropTypes.string.isRequired
};

export { MainError };