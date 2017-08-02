import React from 'react';

const TagItem = ({ tag, className }) => {
  return (
    <span className={`tag tag--${tag} ${className}`}>{tag}</span>
  );
};

TagItem.propTypes = {
  tag: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default TagItem;
