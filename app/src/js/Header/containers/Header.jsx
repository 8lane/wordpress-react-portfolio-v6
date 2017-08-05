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

  render() {
    const { siteTitle, siteDescription, siteURL } = this.state;

    return (
      <div className="header">
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
