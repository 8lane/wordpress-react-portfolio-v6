import React from 'react';

const ProjectThumbnail = ({ src, alt }) => {
  return (
    <img className="img-fluid" alt={alt} src={src} />
  );
};

ProjectThumbnail.defaultProps = {
  src: null,
  alt: '',
};

ProjectThumbnail.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
};

export default ProjectThumbnail;
