import React from 'react';
import ReactDOM from 'react-dom';

import { Projects } from './Projects/containers';
import { Header } from './Header';

const picturefill = require('picturefill');

picturefill();

const headerNode = document.getElementById('tc-header');
const projectsNode = document.getElementById('tc-projects');

/* global document */
if (projectsNode) {
	ReactDOM.render(
		<Projects />,
		projectsNode
	);
}

if (headerNode) {
	ReactDOM.render(
		<Header />,
		headerNode
	);
}
