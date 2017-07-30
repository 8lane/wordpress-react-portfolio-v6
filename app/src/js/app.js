import React from 'react';
import ReactDOM from 'react-dom';

import { Projects } from './Projects';

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
