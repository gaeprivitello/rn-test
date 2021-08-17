import axios from 'axios';

export async function post(endpoint, body) {
  return axios.post(endpoint, body);
};

export async function get(endpoint) {
  return axios.get(endpoint);
};

export async function put(endpoint, body) {
  return axios.put(endpoint, body);
};

export async function del(endpoint) {
  return axios.delete(endpoint);
};
