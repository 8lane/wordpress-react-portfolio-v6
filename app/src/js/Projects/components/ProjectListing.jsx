import React from 'react';

import { ProjectInfoBar, ProjectThumbnail, ViewMoreBtn } from '../components';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory, isToggled, onToggleMore }) => {

  const { metadata } = project;

  return (
    <li className="project-listing">
      {showCategory ? <h3>{getProjectYear(project)}</h3> : null }

      <div className="project-listing__body">
        <a className="project-listing__preview row" href={`./${project.slug}`} onClick={evt => onToggleMore(evt, project.id)}>
          <div className="col-xs-12 col-sm-5">
            <ProjectThumbnail alt={project.title.rendered} src="http://via.placeholder.com/450x300" />
          </div>
          <div className="col-xs-12 col-sm-7">
            <div className="project-listing__preview-meta">
              <h3 className="display-3">{project.title.rendered}</h3>
              <p>{project.excerpt.rendered}</p>
            </div>
          </div>
        </a>

        <div className={`project-listing__detailed ${isToggled ? 'project-listing__detailed--toggled' : null}`}>
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
      </div>
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
