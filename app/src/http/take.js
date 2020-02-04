import axios from 'axios';

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/take/';

const take = async (token, name) => {
  let body = {Authorization: `Token ${token}`, name: name};
  let res = await axios.post(url, body);
  return res.data;
};

export default take;