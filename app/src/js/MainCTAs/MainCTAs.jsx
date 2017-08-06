import React from 'react';
import { scrollToElement } from '../helpers';

const cvDownloadUrl = 'https://www.dropbox.com/s/4m28soy02jkc4zf/tc2017.pdf?dl=0';
const btnClass = (type = 'secondary') => `btn btn-outline-${type} btn-lg`;

const MainCTAs = () => {
  return (
    <div className="main-ctas">
      <a className={`main-ctas__btn main-ctas__btn--folio ${btnClass('success')}`} href="#tc-projects" onClick={e => scrollToElement(e, 'tc-projects')}>View projects</a>
      <span className="main-ctas__sep hidden-xs-down">or</span>
      <a className={`main-ctas__btn main-ctas__btn--cv ${btnClass()}`} href={cvDownloadUrl} target="_blank">Download CV</a>
    </div>
  );
};

export default MainCTAs;
