import axios from 'axios';

import { config } from 'conf';

const baseURL = window.env.INNOVAMAT_BACKEND;

export const Api = {
  getContentByPageType: async (type) => await axios.get(`${baseURL}/${type}`),
  getResourcesById: async (id) =>
    await axios.get(`${baseURL}/${config.paths.RESOURCES}/${id}`),
  search: async (keyword) =>
    await axios.post(`${baseURL}/${config.paths.SEARCH}`, keyword),
};
