import React from 'react';

import { ProjectInfoBar, ProjectThumbnail, ProjectCloseBtn, ViewMoreBtn } from '../components';

import getProjectYear from '../helpers';

const ProjectListing = ({ project, showCategory, isToggled, onToggleMore }) => {
  const { metadata } = project;

  return (
    <li className={`project-listing ${isToggled ? 'project-listing--toggled' : ''}`}>
      {showCategory ?
        <h3 className="project-listing__date">{getProjectYear(project)}</h3>
        : null
      }

      <div className="project-listing__body">
        <a className="project-listing__preview row" href={`./${project.slug}`} onClick={evt => onToggleMore(evt, project.id)}>
          <ProjectCloseBtn />

          <div className="col-xs-12 col-md-5">
            <ProjectThumbnail alt={project.title.rendered} src={`./wp-content/themes/tc-portfolio-v6/app/dist/images/project-thumbnails/${project.slug}.jpg`} />
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="project-listing__preview-meta">
              <h3 className="project-listing__preview-title display-3">{project.title.rendered}</h3>
              <p
                className="project-listing__preview-excerpt"
                dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
              />
            </div>
          </div>
        </a>

        <div className={`project-listing__detailed ${isToggled ? 'project-listing__detailed--toggled' : null}`}>
          <div className="project-listing__detailed-body">
            <ProjectInfoBar
              client={metadata.projectClientName && metadata.projectClientName[0]}
              date={metadata.projectDate && metadata.projectDate[0]}
              tags={project.tags}
            />

            <p
              className="project-listing__excerpt-full"
              dangerouslySetInnerHTML={{
                __html: metadata.projectExcerptFull && metadata.projectExcerptFull[0]
              }}
            />

            <ViewMoreBtn
              url={project.slug}
              isVisible={metadata.projectHasCaseStudy && !!JSON.parse(metadata.projectHasCaseStudy)}
            />
          </div>
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
