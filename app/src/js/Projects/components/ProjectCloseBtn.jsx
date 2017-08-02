import React from 'react';

const ProjectCloseBtn = ({ onClose }) => {
  return (
    <button className="project-listing__close-btn btn-link" onClick={onClose}>
      <i className="project-listing__close-btn-icon">&times;</i>
      <span className="sr-only">Close project</span>
    </button>
  );
};

ProjectCloseBtn.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default ProjectCloseBtn;
