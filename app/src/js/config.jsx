import axios from 'axios';

// const BASE_URL_DEV = 'http://dev/folio/v6/wordpress/wp-json/wp/v2';
const BASE_URL_PROD = 'http://tomchristian.co.uk/wordpress/wp-json/wp/v2';
const BASE_URL = BASE_URL_PROD;

const ENDPOINT = {
  PROJECT_TAGS: BASE_URL + '/tags',
  PROJECTS: BASE_URL + '/projects'
};

const API = () => {
  return {
    getProjectTags: tags => axios.get(ENDPOINT.PROJECT_TAGS, {
      params: {
        include: tags
      }
    }),
    getProjects: () => axios.get(ENDPOINT.PROJECTS),
  }
};

export default new API();
