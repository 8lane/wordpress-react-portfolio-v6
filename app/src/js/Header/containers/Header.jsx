/* global window */

import React from 'react';

import { MainCTAs } from '../../MainCTAs';

const imgPath = './wp-content/themes/tc-portfolio-v6/app/dist/images';

class Header extends React.Component {
  constructor(props) {
    super(props);

    const preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;

    this.state = {
      siteTitle: preloadedState.siteTitle,
      siteDescription: preloadedState.siteDescription,
      siteURL: preloadedState.siteURL,
    };

    this.setVideoWidth = this.setVideoWidth.bind(this);
  }

  componentDidMount() {
    this.setVideoListeners();
  }

  componentWillUnmount() {
    this.removeVideoListeners();
  }

  setVideoListeners() {
    this.setVideoWidth();

    window.addEventListener('resize', this.setVideoWidth);

    this.videoRef.addEventListener('loadeddata', () => {
      window.setTimeout(() => {
        this.videoRef.play();
      }, 2800);
    }, false);
  }

  setVideoWidth() {
    this.videoRef.width = window.outerWidth;
    this.videoRef.height = window.outerHeight;
  }

  removeVideoListeners() {
    this.videoRef.removeEventListener('loadeddata');
    window.removeEventListener('resize', this.setVideoWidth);
  }

  render() {
    const { siteTitle, siteDescription, siteURL } = this.state;

    return (
      <div className="header">
        <div className="header__bg" />

        <video ref={(video) => { this.videoRef = video; }} className="header__video" muted loop>
          <source src={`${imgPath}/header-video.mp4`} type="video/mp4" />
          <source src={`${imgPath}/header-video.ogv`} type="video/ogg" />
          {/*}<source src={`${imgPath}/header-video.webm`} type="video/webm" />*/}
        </video>

        <div className="header__content container">
          <a className="header__link" href={siteURL}>
            <h1 className="header__title display-1">{siteTitle}</h1>
          </a>
          <div
            className="header__description"
            dangerouslySetInnerHTML={{ __html: siteDescription }}
          />
          <MainCTAs />
        </div>
      </div>
    );
  }
}

export default Header;
