import React from 'react';

const ProjectThumbnail = ({ src, alt, srcset }) => {
  return (
    <img className="project-thumbnail__img img-fluid" alt={alt} src={src} srcSet={srcset} />
  );
};

ProjectThumbnail.defaultProps = {
  src: null,
  srcset: null,
  alt: '',
};

ProjectThumbnail.propTypes = {
  src: React.PropTypes.string,
  srcset: React.PropTypes.string,
  alt: React.PropTypes.string,
};

export default ProjectThumbnail;
