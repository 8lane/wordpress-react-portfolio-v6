import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get('http://dev/folio/v6/wordpress/wp-json/wp/v2/projects')
      .then(response => {
        console.log(response);
        this.setState({
          projects: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { projects } = this.state;

    return (
      <div class="projects">
        {projects.map(project => {
          return (
            <a key={project.id} href={`./${project.slug}`}>{project.title.rendered}</a>
          )
        })}
      </div>
    )
  }
}

export default Projects;

ReactDOM.render(
  <Projects />,
  document.getElementById('tc-projects')
);
