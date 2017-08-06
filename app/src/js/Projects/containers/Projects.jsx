import React from 'react';

import API from '../../config';
import { scrollToElement, extractErrors } from '../../helpers';

import { Errors } from '../../Errors/components';
import { ProjectListing } from '../components';

import getProjectYear from '../helpers';

const TimelineCircle = ({ size, half }) => {
  return (
    <svg width={size / 2} height={size} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 84.1 168.2`}>
      <g>
        {half === 'left' ?
          <path className={`circle circle--${half}`} d="M84.1 1A83.1 83.1 0 0 0 1 84.1a83.1 83.1 0 0 0 83.1 83.1" />
          :
          <path className={`circle circle--${half}`} d="M0,1H0A83.1,83.1,0,0,1,83.1,84.1h0A83.1,83.1,0,0,1,0,167.2H0" />
        }
      </g>
    </svg>
  );
};

const TimelineStem = () => {
  return (
    <svg width="2" height="35" className="timeline__stem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 36.62">
      <g>
        <path className="timeline__stem-path" d="M1 0v36.62" />
      </g>
    </svg>
  );
};

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      toggledProject: null,
      errors: [],
    };
  }

  componentDidMount() {
    API.getProjects()
      .then(response => this.setState({ projects: response.data }))
      .catch(error => this.setState({ errors: [error.message] }));
  }

  render() {
    const { projects, toggledProject, errors } = this.state;
    const currentYear = projects.length ? getProjectYear(projects[0]) : null;
    const categories = [currentYear];

    return (
      <div className="projects">

        {currentYear ?
          <a
            onClick={e => scrollToElement(e, 'tc-projects')}
            href="#tc-projects"
            className="timeline-marker timeline-marker--current"
          >
            <TimelineCircle size={93} half="left" />
            <TimelineCircle size={93} half="right" />
            <span className="timeline-marker__label display-4">{currentYear}</span>
            <TimelineStem />
          </a>
          : null
        }

        {errors.length ? <Errors messages={errors} /> : null}

        <ol className="list-unstyled">
          {projects.map((project) => {
            let showCategory = false;

            if (categories.indexOf(getProjectYear(project)) < 0) {
              categories.push(getProjectYear(project));
              showCategory = true;
            }

            return (
              <ProjectListing
                key={project.id}
                project={project}
                showCategory={showCategory}
                isToggled={project.id === toggledProject}
                onToggleMore={(evt, id) => {
                  evt.preventDefault();

                  if (id === toggledProject) {
                    this.setState({ toggledProject: null });
                  } else {
                    this.setState({ toggledProject: id });
                  }
                }}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Projects;
