import axios from 'axios';


// takes the name of the thing to wear
const wear = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/wear/';
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  return res.data;
};

const undress = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/undress/';
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  return res.data;
};

export default {wear};