import React from 'react';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory }) => {
  const hasCaseStudy = project.metadata.canViewMore && JSON.parse(project.metadata.canViewMore);

  return (
    <li>
      {showCategory ? <h3>{getProjectYear(project)}</h3> : null }
      <h4>{project.title.rendered}</h4>
      {hasCaseStudy ? <a href={`./${project.slug}`}>View more</a> : null}
    </li>
  );
};

React.defaultProps = {
  showCategory: false,
};

React.propTypes = {
  project: React.PropTypes.object.isRequired,
  showCategory: React.PropTypes.bool,
};

export default ProjectListing;
