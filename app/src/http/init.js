import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/init/';


/* Example Response:
{
  "room_id": 10,
  "title": "A Dark Room",
  "description": "You cannot see anything.",
  "coordinates": "(60,61)",
  "exits": ["n", "s", "w"],
  "cooldown": 100.0,
  "errors": [],
  "messages": ["You have walked north."]
}
 */

const init = async (token) => {
  let awa = axiosWithAuth(token, url);
  let res = await awa.get(url);
  return res.data;
};

export default init;