import axios from 'axios';

// const API_URL = 'http://dev/folio/v6/wordpress/wp-json/wp/v2';
const API_URL = 'http://tomchristian.co.uk/wp-json/wp/v2';
const BASE_URL = API_URL;

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
