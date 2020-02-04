import axios from 'axios';

// gives you powers if you pray at a shrine
const pray = async (token) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/';
  let body = {Authorization: `Token ${token}`};
  let res = await axios.post(url, body);
};

export default pray;