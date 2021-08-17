import { get } from "./apiHelper";

const endpoint = "https://run.mocky.io/v3/80b72bae-3390-4052-ae32-91f0801a79a9";

const endpointDetails = "https://api.github.com/users/";

export const getUsers = () => {
  return get(endpoint, false);
};

export const getUserDetails = (username) => {
  return get(endpointDetails+username);
};

