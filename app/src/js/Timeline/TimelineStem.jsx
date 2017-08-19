import React from 'react';

const TimelineStem = ({ width, height }) => {
  return (
    <svg width={width} height={height} className="timeline-stem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 36.62">
      <g>
        <path className="timeline-stem__path" d="M1 0v36.62" />
      </g>
    </svg>
  );
};

TimelineStem.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default TimelineStem;
