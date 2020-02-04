import move from '../http/move';
import { useContext } from 'react';
import MapContext, { addRoom, getRooms } from "../state/StateManagement";
import move, { fly, dash } from '../http/move';

const makeMove = async (token, state, room, dir) => {
  // later, add some checks to utilize fly and dash
  let res = await move(token, dir, room);
  if(!res.hasOwnProperty('room_id')) return state;
  state[res.room_id] = res;
  return state;
};

// because we dont have access to the map's width and height constraints, we'll need to mark rooms that we've tried that don't exist coordinate wise
// the automapper needs some intial state, set from adding the room init returns
const auto_mapper = async (token, state, logHook) => {
  const context = useContext(MapContext);

  let reverse_dirs = {'n': 's', 's': 'n', 'e': 'w', 'w': 'e', '-': '-'};
  let walk_stack = [];
  let visited = state.map; // might need to adjust this later
  let start;
  let current = ['-', start];
  let cooldown = 0; // we'll convert the cooldown strings to an int and add delays to our code to wait them out

};