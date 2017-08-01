import React from 'react';

const ViewMoreBtn = ({ url, isVisible }) => {
  return (
    isVisible ?
      <a href={`./${url}`}>View more</a>
    : null
  );
};

ViewMoreBtn.defaultProps = {
  isVisible: false,
};

ViewMoreBtn.propTypes = {
  url: React.PropTypes.string.isRequired,
  isVisible: React.PropTypes.bool,
};

export default ViewMoreBtn;
