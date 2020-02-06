import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

// takes a name to use as your player's new name
// you must have 1000 gold to change you name
// so start collecting early
const change_name = async (token, name) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/';
  let awa = axiosWithAuth(token, url);
  let body = {name};
  let res = await awa.post(url, body);
  return res.data;
};

export default change_name;