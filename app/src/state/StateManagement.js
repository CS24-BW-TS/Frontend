import { createContext } from 'react';
import axios from 'axios';


// for mapcontext, we're going to store each room by ID
// room_id = 10 will be it's identifier
// "10" = {Room}
const MapContext = createContext({});

// we need the url to add rooms to the backend
// and also the url to fetch all the room from the backend
const addRoom = (room, state) => {
  if(!room) return false;
  let api_post;
  if(state.hasOwnProperty(room.room_id)) {
    // it already has this property in it
    return true;
  }
  // it doesnt have it, add it in and notify the backend
  state[room.room_id] = room;
  let body = {room: room};
  axios.post(api_post, body)
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.error(e);
    });
  return state;
};

const getRooms = (state) => {
  let api_get;
  axios.get(api_get)
    .then(res => {
      console.log(res);
      // however this is formatted, grab the array of rooms and implement them
      let rooms = res.data;
      rooms.forEach(r => {
        state[r.room_id] = r;
      });
    })
    .catch(e => {
      console.error(e);
      // do something
    });
  return state;
};

// we may need more context to store things like user inventory

export { MapContext, addRoom, getRooms };
