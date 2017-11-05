import React from 'react';

const ProjectCTAs = ({ liveDemoUrl, websiteUrl }) => {
	return (
		liveDemoUrl || liveDemoUrl ?
			<section className="project-ctas">
				{liveDemoUrl &&
					<a
						className="project-ctas__btn btn btn-outline-primary btn-lg"
						href={liveDemoUrl}
						target="_blank"
					>
						View live demo
					</a>
				}

				{websiteUrl &&
					<a
						className="project-ctas__btn btn btn-outline-primary btn-lg"
						href={websiteUrl}
						target="_blank"
					>
						See website
					</a>
				}
			</section>
			: null
	);
};

ProjectCTAs.defaultProps = {
	liveDemoUrl: null,
	websiteUrl: null,
};

ProjectCTAs.propTypes = {
	liveDemoUrl: React.PropTypes.string,
	websiteUrl: React.PropTypes.string,
};

export default ProjectCTAs;
