import React from 'react';

import { Tags } from '../../Tags';

const ProjectInfoBar = ({ client, date, tags }) => {
  return (
    <ul>
      <li><span>Client:</span> {client}</li>
      <li><span>Date:</span> {date}</li>
      <li><Tags ids={tags} /></li>
    </ul>
  );
};

ProjectInfoBar.defaultProps = {
  client: null,
  date: null,
  tags: [],
};

ProjectInfoBar.propTypes = {
  client: React.PropTypes.string,
  date: React.PropTypes.string,
  tags: React.PropTypes.array,
};

export default ProjectInfoBar;
