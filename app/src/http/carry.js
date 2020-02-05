import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";


// let a ghostly companion ease encumbrance by giving them a heavy item to carry
const carry = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/carry/';
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

// take back the item your companion is carrying
const receive = async (token) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/receive/';
  let awa = axiosWithAuth(token, url);
  let body = {};
  let res = await awa.post(url, body);
  return res.data;
};

export default carry;
export {receive};