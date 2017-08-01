import React from 'react';
import ReactDOM from 'react-dom';

import { Projects } from './Projects/containers';
import { Header } from './Header';

/* global document */
ReactDOM.render(
  <Projects />,
  document.getElementById('tc-projects')
);

ReactDOM.render(
  <Header />,
  document.getElementById('tc-header')
);
