import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

// gives you powers if you pray at a shrine
const pray = async (token) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/';
  let awa = axiosWithAuth(token, url);
  let body = {};
  let res = await awa.post(url, body);
};

export default pray;