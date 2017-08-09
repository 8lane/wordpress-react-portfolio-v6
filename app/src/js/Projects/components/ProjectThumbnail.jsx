import React from 'react';
import classNames from 'classnames';

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
    };
  }

  render() {
    const { imageLoaded } = this.state;
    const { src, alt, srcset, lazyLoad } = this.props;

    return (
      <div>
        {lazyLoad ?
          <img
            className={classNames('project-thumbnail__img img-fluid', {
              'project-thumbnail__img--loaded': imageLoaded
            })}
            alt={alt}
            src={src}
            srcSet={srcset}
            onLoad={() => this.setState({ imageLoaded: true })}
          />
          : null
        }

        {!imageLoaded ? <div className="project-thumbnail__ghost" /> : null}
      </div>
    );
  }
}

ProjectThumbnail.defaultProps = {
  src: null,
  srcset: null,
  alt: '',
  lazyLoad: false,
};

ProjectThumbnail.propTypes = {
  src: React.PropTypes.string,
  srcset: React.PropTypes.string,
  alt: React.PropTypes.string,
  lazyLoad: React.PropTypes.bool,
};

export default ProjectThumbnail;
