import axios from 'axios';

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/';

// takes a name of the player or object you want to examine
const examine = async (token, name) => {
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  return res.data;
};

export default examine;