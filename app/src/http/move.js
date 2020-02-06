import axios from 'axios';
import axiosWithAuth from "./axiosWithAuth";

// if we include the id of the room we move to we get the wise explorer bonus
// we need to also add the room to our state if it isn't there
// make a request to our backend to fill that room in so we have it for reference between
// game sessions

/* Example room dict
{
  0: {"n": 10, "s": "?", "e": "?", "w": "?"},
  10: {"n": "?", "s": 0, "w": "?"}
}
 */

// wise explorer bonus will be present in the 'messages' portion of the api response

/* Example Response:
{
  "room_id": 0,
  "title": "A Dark Room",
  "description": "You cannot see anything.",
  "coordinates": "(60,60)",
  "players": [],
  "items": [],
  "exits": ["n", "s", "e", "w"],
  "cooldown": 50.0,
  "errors": [],
  "messages": ["You have walked south.", "Wise Explorer: -50% CD"]
}
 */


const move = async (token, dir, next_room) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/';
  let awa = axiosWithAuth(token, url);
  let body = {direction: dir};
  if(next_room) body['next_room_id'] = next_room;
  let res = await awa.post('', body);
  return res.data;
};

const fly = async (token, dir, next_room=null) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/fly/';
  let awa = axiosWithAuth(token, url);
  let body = {direction: dir};
  if(next_room) body['next_room_id'] = next_room;
  let res = await awa.post(url, body);
  return res.data;
};

const dash = async (token, dir, num_rooms, next_room_ids) => {
  let url = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/dash/';
  let awa = axiosWithAuth(token, url);
  let body = {direction: dir, num_rooms, next_room_ids};
  let res = awa.post(url, body);
  return res.data;
};

export default move;
export {fly, dash};