import axios from 'axios';

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/';

const drop = async (token, name) => {
  let body = {Authorization: `Token ${token}`, name: name};
  let res = await axios.post(url, body);
  return res.data;
};

export default drop;