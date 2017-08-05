import React from 'react';

const TagItem = ({ name, slug, className }) => {
  return (
    <span className={`tag tag--${slug} ${className}`}>{name}</span>
  );
};

TagItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default TagItem;
