// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const Loading = (props) => (
  <div>
    {
      props.busy &&
      <div>
        Loading...
      </div>
    }
  </div>
);


// CONFIGURE COMPONENT PROP TYPES

Loading.propTypes = {
  busy: PropTypes.bool
};


// EXPORT COMPONENT

export { Loading };