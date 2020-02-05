import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";


// takes the name of the thing to wear
const wear = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/wear/';
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

const undress = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/undress/';
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

export {wear, undress};