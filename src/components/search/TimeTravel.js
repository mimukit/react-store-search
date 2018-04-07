import React from 'react';
import PropTypes from 'prop-types';

const TimeTravel = ({ prevSnapshot, nextSnapshot }) => (
  <span className="time-travel-btn-group">
    <button onClick={prevSnapshot}>&lt;</button>
    <button onClick={nextSnapshot}>&gt;</button>
  </span>
);

TimeTravel.propTypes = {
  prevSnapshot: PropTypes.func.isRequired,
  nextSnapshot: PropTypes.func.isRequired,
};

export default TimeTravel;
