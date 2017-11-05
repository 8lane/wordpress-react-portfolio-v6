import React from 'react';

import API from '../../config';
import { scrollToElement, extractErrors } from '../../helpers';

import { Errors } from '../../Errors/components';
import { ProjectListing } from '../components';
import { TimelineStem, TimelineCircle } from '../../Timeline';

import getProjectYear from '../helpers';

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
						className="timeline-cta"
					>
						<TimelineCircle size={93} half="left" />
						<TimelineCircle size={93} half="right" />
						<span className="timeline-cta__label display-4">{currentYear}</span>
						<TimelineStem height={33} width={2} />
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
