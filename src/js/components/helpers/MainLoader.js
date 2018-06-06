import React from 'react';
import PropTypes from 'prop-types';

const MainLoader = (props) => (
  <div className="container">
    {
      props.busy &&
      <div className="loader">
        <div className="page-bg"/>
        <div className="preloader">
          <div className="preloader-box">
            <div>Р</div>
            <div>И</div>
            <div>О</div>
            <div>М</div>
            <div>Е</div>
            <div>Д</div>
            <div>И</div>
            <div>А</div>
          </div>
        </div>

      </div>
    }
  </div>
);

MainLoader.propTypes = {
  busy: PropTypes.bool
};

export { MainLoader };