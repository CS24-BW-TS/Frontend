import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/take/';

const take = async (token, name) => {
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

export default take;