import axios from 'axios';

const url ='https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/';

/* Example Response:

{
  "room_id": "?",
  "title": "Shop",
  "description": "You are standing in a shop. You can sell your treasure here.",
  "coordinates": "?",
  "players": [],
  "items": [],
  "exits": ["e"],
  "cooldown": 2.0,
  "errors": [],
  "messages": ["I'll give you 100 gold for that Small Treasure.", "(include 'confirm':'yes' to sell Small Treasure)"]
}
 */

const sell = async (token, name) => {
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  return res.data;
};


const confirmSell = async (token, name, confirm) => {
  let body = {Authorization: `Token ${token}`, name, confirm};
  let res = await axios.post(url, body);
  return res.data;
};

const autoSell = async (token, name) => {
  let body = {Authorization: `Token ${token}`, name};
  let res = await axios.post(url, body);
  // check to make sure the response is valid
  body['confirm'] = 'yes';
  res = await axios.post(url, body);
  return res.data;
};

export {sell, confirmSell, autoSell};