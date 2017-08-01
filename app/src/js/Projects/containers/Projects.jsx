import React from 'react';

import API from '../../config';
import extractErrors from '../../helpers';

import { Errors } from '../../Errors/components';
import { ProjectListing } from '../components';

import getProjectYear from '../helpers';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      errors: [],
    };
  }

  componentDidMount() {
    API.getProjects()
      .then(response => this.setState({ projects: response.data }))
      .catch(error => this.setState({ errors: [error.message] }));
  }

  render() {
    const { projects, errors } = this.state;
    const currentYear = projects.length ? getProjectYear(projects[0]) : null;
    const categories = [currentYear];

    return (
      <div className="projects">
        {currentYear ? <h2>{currentYear}</h2> : null}

        {errors.length ? <Errors messages={errors} /> : null}

        <ol className="list-unstyled">
          {projects.map((project) => {
            let showCategory = false;

            if (categories.indexOf(getProjectYear(project)) < 0) {
              categories.push(getProjectYear(project));
              showCategory = true;
            }

            return (
              <ProjectListing key={project.id} project={project} showCategory={showCategory} />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Projects;
