import React from 'react';

import { Tags } from '../../Tags';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory }) => {
  const hasCaseStudy = project.metadata.canViewMore && JSON.parse(project.metadata.canViewMore);

  return (
    <li>
      <Tags ids={project.tags} />
      {showCategory ? <h3>{getProjectYear(project)}</h3> : null }
      <h4>{project.title.rendered}</h4>
      <p>{project.excerpt.rendered}</p>
      {hasCaseStudy ? <a href={`./${project.slug}`}>View more</a> : null}
    </li>
  );
};

ProjectListing.defaultProps = {
  showCategory: false,
};

ProjectListing.propTypes = {
  project: React.PropTypes.object.isRequired,
  showCategory: React.PropTypes.bool,
};

export default ProjectListing;
