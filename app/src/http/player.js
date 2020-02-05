import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";


/* Example response:

{
  "name": "br80",
  "cooldown": 2.0,
  "encumbrance": 2,  // How much are you carrying?
  "strength": 10,  // How much can you carry?
  "speed": 10,  // How fast do you travel?
  "gold": 400,
  "bodywear": "None",
  "footwear": "None",
  "inventory": ["Small Treasure"],
  "status": [],
  "errors": [],
  "messages": []
}
 */

const status = async (token) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/status/';
  let awa = axiosWithAuth(token, url);
  let body = {};
  let res = await awa.post(url, body);
  return res.data;
};


export default status;