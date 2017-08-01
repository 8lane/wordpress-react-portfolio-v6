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
        <a className="header__link" href={siteURL}>
          <h1 className="header__title">{siteTitle}</h1>
        </a>

        <p className="header__description" dangerouslySetInnerHTML={{ __html: siteDescription }} />

        <MainCTAs />
      </div>
    );
  }
}

export default Header;
