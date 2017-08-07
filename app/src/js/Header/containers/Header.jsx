/* global window */

import React from 'react';

import { MainCTAs } from '../../MainCTAs';

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
  }

  componentDidMount() {
    this.videoRef.addEventListener('loadeddata', () => {
      window.setTimeout(() => {
        this.videoRef.play();
      }, 2800);
    }, false);
  }

  componentWillUnmount() {
    this.videoRef.removeEventListener('loadeddata');
  }

  render() {
    const { siteTitle, siteDescription, siteURL } = this.state;

    return (
      <div className="header">
        <div className="header__bg" />

        <video ref={(video) => { this.videoRef = video; }} className="header__video" muted>
          <source src="./wp-content/themes/tc-portfolio-v6/app/dist/images/header-video.mp4" type="video/mp4" />
          <source src="media/demo.ogv" type="video/ogg" />
          <source src="media/demo.webm" type="video/webm" />
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
