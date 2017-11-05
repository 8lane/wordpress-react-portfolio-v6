import React from 'react';
import classNames from 'classnames';
import ScrollReveal from 'scrollreveal';

import {
	ProjectInfoBar,
	ProjectCTAs,
	ProjectThumbnail,
	ProjectCloseBtn,
	ViewMoreBtn
} from '../components';

import getProjectYear from '../helpers';

const sr = ScrollReveal();

class ProjectListing extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasLoaded: false,
			isAnimated: false,
		};

		this.calculateProjectHeight = this.calculateProjectHeight.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.calculateProjectHeight);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.calculateProjectHeight);
	}

	setProjectHeight() {
		this.listingRef.style.maxHeight = `${this.listingRef.firstElementChild.clientHeight}px`;
	}

	calculateProjectHeight() {
		if (this.listingRef && this.listingRef.classList.contains('project-listing__detailed--toggled')) {
			this.setProjectHeight();
		}
	}

	render() {
		const {
			project: {
				metadata
			},
			project,
			showCategory,
			isToggled,
			onToggleMore
		} = this.props;

		const { hasLoaded, isAnimated } = this.state;

		const scrollConfig = {
			duration: 400,
			delay: 150,
			beforeReveal: () => this.setState({ isAnimated: true })
		};

		return (
			<li
				ref={element => element && sr.reveal(element, scrollConfig)}
				className={classNames('project-listing', {
					'project-listing--toggled': isToggled,
					'project-listing--animated': isAnimated,
				})}
			>
				{showCategory ?
					<h3 className="project-listing__date">{getProjectYear(project)}</h3>
					: null
				}

				<div className="project-listing__body">
					<a className="project-listing__preview row" href={`./${project.slug}`} onClick={evt => onToggleMore(evt, project.id)}>
						<ProjectCloseBtn />

						<div className="col-xs-12 col-md-5">
							<ProjectThumbnail
								lazyLoad={!!isAnimated}
								alt={project.title.rendered}
								src={`${process.env.IMG_DIR}/project-thumbnails/${project.slug}.jpg`}
								srcset={`${process.env.IMG_DIR}/project-thumbnails/${project.slug}@2x.jpg 2x`}
							/>
						</div>
						<div className="col-xs-12 col-md-7">
							<div className="project-listing__preview-meta">
								<h3 className="project-listing__preview-title display-3">
									{project.title.rendered}
								</h3>
								<p
									className="project-listing__preview-excerpt"
									dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
								/>
							</div>
						</div>
					</a>

					<div
						ref={(element) => {
							this.listingRef = element;

							if (this.listingRef && !hasLoaded) {
								this.setState({ hasLoaded: true });
								this.setProjectHeight();
							}
						}}
						className={classNames('project-listing__detailed', {
							'project-listing__detailed--toggled': isToggled,
							'project-listing__detailed--loaded': hasLoaded,
						})}
					>
						<div className="project-listing__detailed-body">
							<ProjectInfoBar
								client={metadata.projectClientName && metadata.projectClientName[0]}
								date={metadata.projectDate && metadata.projectDate[0]}
								tags={project.tags}
							/>

							<ProjectCTAs
								liveDemoUrl={metadata.projectLiveDemoUrl && metadata.projectLiveDemoUrl[0]}
								websiteUrl={metadata.projectWebsiteUrl && metadata.projectWebsiteUrl[0]}
							/>

							<p
								className="project-listing__excerpt-full"
								dangerouslySetInnerHTML={{
									__html: metadata.projectExcerptFull && metadata.projectExcerptFull[0]
								}}
							/>

							<ViewMoreBtn
								url={project.slug}
								isVisible={metadata.projectHasCaseStudy && !!JSON.parse(metadata.projectHasCaseStudy)}
							/>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

ProjectListing.defaultProps = {
	showCategory: false,
	isToggled: false,
};

ProjectListing.propTypes = {
	project: React.PropTypes.object.isRequired,
	showCategory: React.PropTypes.bool,
	isToggled: React.PropTypes.bool,
	onToggleMore: React.PropTypes.func.isRequired,
};

export default ProjectListing;
