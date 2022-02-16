import axios from 'axios';

import { config } from 'conf';

const baseURL = window.env.INNOVAMAT_BACKEND;

const { paths } = config;

export const Api = {
  getContentByPageType: async (type) => await axios.get(`${baseURL}/${type}`),
  getResourcesById: async (id) =>
    await axios.get(`${baseURL}/${paths.RESOURCES}/${id}`),
  search: async (keyword) =>
    await axios.post(`${baseURL}/${paths.SEARCH}`, keyword),
};
