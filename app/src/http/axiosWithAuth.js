import axios from 'axios';

const axiosWithAuth = (token, url) => {
  return axios.create({
    baseURL: url,
    headers: { Authorization: `Token ${token}`, 'Content-Type': 'applicaton/json' }
  });
};

export default axiosWithAuth;