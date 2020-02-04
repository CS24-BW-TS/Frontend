import axios from 'axios';

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
  let res = await axios.get(url, {headers: {Authorization: `Token ${token}`}});
  return res.data;
};

export default init;