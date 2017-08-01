import React from 'react';

import { ProjectInfoBar, ViewMoreBtn } from '../components';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory, isToggled, onToggleMore }) => {
  return (
    <li>
      <a href={`./${project.slug}`} onClick={evt => onToggleMore(evt, project.id)}>
        {showCategory ? <h3>{getProjectYear(project)}</h3> : null }
        <h4>{project.title.rendered}</h4>
        <p>{project.excerpt.rendered}</p>
      </a>
      {isToggled ?
        <div>
          <ProjectInfoBar
            client={project.metadata.clientName && project.metadata.clientName[0]}
            date={project.date}
            tags={project.tags}
          />
          <ViewMoreBtn
            url={project.slug}
            isVisible={project.metadata.canViewMore && !!JSON.parse(project.metadata.canViewMore)}
          />
        </div>
        : null
      }
    </li>
  );
};

ProjectListing.defaultProps = {
  showCategory: false,
  isToggled: false,
};

ProjectListing.propTypes = {
  project: React.PropTypes.object.isRequired,
  showCategory: React.PropTypes.bool,
  isToggled: React.PropTypes.bool,
  onToggleMore: React.PropTypes.func.isRequired,
};

export default ProjectListing;
