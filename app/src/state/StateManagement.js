import { createContext } from 'react';

// for mapcontext, we're going to store each room by ID
// room_id = 10 will be it's identifier
// "10" = {Room}
const MapContext = createContext({});

// we may need more context to store things like user inventory

export { MapContext };