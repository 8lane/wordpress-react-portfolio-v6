import React from 'react';

const TimelineCircle = ({ size, half }) => {
  return (
    <svg className={`timeline-circle timeline-circle--${half}`} width={size / 2} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.1 168.2">
      <g>
        {half === 'left' ?
          <path className={`timeline-circle__path timeline-circle__path--${half}`} d="M84.1 1A83.1 83.1 0 0 0 1 84.1a83.1 83.1 0 0 0 83.1 83.1" />
          :
          <path className={`timeline-circle__path timeline-circle__path--${half}`} d="M0,1H0A83.1,83.1,0,0,1,83.1,84.1h0A83.1,83.1,0,0,1,0,167.2H0" />
        }
      </g>
    </svg>
  );
};

TimelineCircle.propTypes = {
  size: React.PropTypes.number.isRequired,
  half: React.PropTypes.string.isRequired,
};

export default TimelineCircle;
