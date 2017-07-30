import React from 'react';

import axios from 'axios';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.get('http://dev/folio/v6/wordpress/wp-json/wp/v2/projects')
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

  render() {
    const { projects } = this.state;

    return (
      <div className="projects">
        {projects.map((project) => {
          const canViewMore = JSON.parse(project.metadata.canViewMore);

          return (
            <div key={project.id}>
              <a href={`./${project.slug}`}>{project.title.rendered}</a>
              {canViewMore ? <button>view more</button> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
