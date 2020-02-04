import axios from 'axios';


// let a ghostly companion ease encumbrance by giving them a heavy item to carry
const carry = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/carry/';
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  return res.data;
};

// take back the item your companion is carrying
const receive = async (token) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/receive/';
  let body = {Authorization: `Token ${token}`};
  let res = await axios.post(url, body);
  return res.data;
};

export default carry;
export {receive};