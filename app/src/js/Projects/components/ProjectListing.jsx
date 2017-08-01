import React from 'react';

import { Tags } from '../../Tags';
import { ViewMoreBtn } from '../components';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory, isToggled, onToggleMore }) => {

  return (
    <li>
      <button type="button" onClick={() => onToggleMore(project.id)}>
        {showCategory ? <h3>{getProjectYear(project)}</h3> : null }
        <h4>{project.title.rendered}</h4>
        <p>{project.excerpt.rendered}</p>

        {isToggled ?
          <div>
            <ViewMoreBtn
              url={project.slug}
              isVisible={project.metadata.canViewMore && !!JSON.parse(project.metadata.canViewMore)}
            />
            <Tags ids={project.tags} />
          </div>
          : null
        }
      </button>
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
