import React from 'react';
import PropTypes from 'prop-types';

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


Loading.propTypes = {
  busy: PropTypes.bool
};

export { Loading };