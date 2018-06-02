// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => (
  <div className="alert " role="alert">
    <span className="h4">Unexpected Application Error</span>
    <p className="ml-5 mt-3">{props.message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export { Error };