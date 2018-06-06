import React from 'react';
import PropTypes from 'prop-types';

const MainLoader = (props) => (
  <div>
    {
      props.busy && <div className="loader"><div className="drip" /></div>
    }
  </div>
);

MainLoader.propTypes = {
  busy: PropTypes.bool
};

export { MainLoader };