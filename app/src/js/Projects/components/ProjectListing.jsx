import React from 'react';

import { ProjectInfoBar, ViewMoreBtn } from '../components';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory, isToggled, onToggleMore }) => {

  const { metadata } = project;

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
            client={metadata.projectClientName && metadata.projectClientName[0]}
            date={metadata.projectDate && metadata.projectDate[0]}
            tags={project.tags}
          />

          <p className="project__excerpt-full">
            {metadata.projectExcerptFull && metadata.projectExcerptFull[0]}
          </p>

          <ViewMoreBtn
            url={project.slug}
            isVisible={metadata.projectHasCaseStudy && !!JSON.parse(metadata.projectHasCaseStudy)}
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
