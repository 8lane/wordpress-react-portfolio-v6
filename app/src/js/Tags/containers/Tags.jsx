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

    if (ids && ids.length) {
      API.getProjectTags(ids.join())
        .then(response => this.setState({ tags: response.data }))
        .catch(error => this.setState({ errors: [error.message] }));
    }
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="project-tags">
        {tags && tags.map((tag) => {
          return (
            <TagItem key={tag.id} tag={tag.name} className="project-tags__tag" />
          );
        })}
      </div>
    );
  }
}

Tags.propTypes = {
  ids: React.PropTypes.array.isRequired,
};

export default Tags;
