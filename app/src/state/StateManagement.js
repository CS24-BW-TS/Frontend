import { createContext } from 'react';

export const contextValue = {
    logs: [{
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
    }]
};

// for mapcontext, we're going to store each room by ID
// room_id = 10 will be it's identifier
// "10" = {Room}
const MapContext = createContext({});
// we may need more context to store things like user inventory

export { MapContext };