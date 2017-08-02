import React from 'react';

const ProjectCloseBtn = () => {
  return (
    <button className="project-listing__close-btn btn-link">
      <i className="project-listing__close-btn-icon">&times;</i>
      <span className="sr-only">Close project</span>
    </button>
  );
};

export default ProjectCloseBtn;
