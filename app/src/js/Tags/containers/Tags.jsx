import React from 'react';

import API from '../../config';
import extractErrors from '../../helpers';

import { Errors } from '../../Errors/components';
import { TagItem } from '../components';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      errors: [],
    };
  }

  componentDidMount() {
    const { ids } = this.props;

    if (ids) {
      API.getProjectTags(ids)
        .then(response => this.setState({ tags: response.data }))
        .catch(error => this.setState({ errors: [error.message] }));
    }
  }

  render() {
    return (
      <div className="tags">
        tags
      </div>
    );
  }
}

Tags.propTypes = {
  ids: React.PropTypes.array.isRequired,
};

export default Tags;
