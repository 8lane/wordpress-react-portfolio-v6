import axios from 'axios';

const BASE_URL = 'http://dev/folio/v6/wordpress/wp-json/wp/v2';

const ENDPOINT = {
  PROJECT_TAGS: BASE_URL + '/tags',
  PROJECTS: BASE_URL + '/projects'
};

const API = () => {
  return {
    getProjectTags: tags => axios.get(ENDPOINT.PROJECT_TAGS, { include: tags }),
    getProjects: () => axios.get(ENDPOINT.PROJECTS),
  }
};

export default new API();
