import React from 'react';
import axios from 'axios';

import API from '../../config';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.get(API.getProjects)
      .then((response) => {
        console.log(response);
        this.setState({
          projects: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProjectYear(timestamp) {
    return new Date(timestamp).getFullYear();
  }

  render() {
    const { projects } = this.state;
    const currentYear = projects.length ? this.getProjectYear(projects[0].date) : null;
    const categories = [currentYear];

    return (
      <div className="projects">
        <h2>{currentYear}</h2>

        {projects.map((project) => {
          let showCategory = false;
          const year = this.getProjectYear(project.date);

          if (categories.indexOf(year) < 0) {
            categories.push(year);
            showCategory = true;
          }

          const canViewMore = project.metadata.canViewMore && JSON.parse(project.metadata.canViewMore);

          return (
            <div key={project.id}>
              {showCategory ? <h3>{year}</h3> : null }
              <h4>{project.title.rendered}</h4>
              {canViewMore ? <a href={`./${project.slug}`}>View more</a> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
