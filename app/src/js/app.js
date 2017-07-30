import React from 'react';
import ReactDOM from 'react-dom';

console.log('hi 3')

const HeaderCTAs = () => {
  return (
    <div>
      <button>View projects</button>
      <button>Download CV</button>
    </div>
  )
}

ReactDOM.render(
  <HeaderCTAs />,
  document.getElementById('tc-cta')
);


class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="projects">
        projects in here
      </div>
    )
  }
}


ReactDOM.render(
  <Projects />,
  document.getElementById('tc-projects')
);
