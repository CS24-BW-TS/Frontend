import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/';

// takes a name of the player or object you want to examine
const examine = async (token, name) => {
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

export default examine;