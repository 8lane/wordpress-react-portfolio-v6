import React from 'react';
import ReactDOM from 'react-dom';

import { Projects } from './Projects';
import { HeaderButtons } from './HeaderButtons';

/* global document */
ReactDOM.render(
  <Projects />,
  document.getElementById('tc-projects')
);

ReactDOM.render(
  <HeaderButtons />,
  document.getElementById('tc-cta')
);
