import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Room from "./Room";

const Map = props => {
  const mapData = [
    {
      room_id: 74,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,61)",
      elevation: 0,
      terrain: "NORMAL",
      players: [],
      items: [],
      exits: ["n", "s", "w"],
      cooldown: 15.0,
      errors: [],
      messages: ["You have walked south."],
      n: 87,
      s: -1,
      e: null,
      w: -1
    },
    {
      room_id: 87,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,62)",
      elevation: 0,
      terrain: "NORMAL",
      players: [],
      items: [],
      exits: ["s"],
      cooldown: 15.0,
      errors: [],
      messages: ["You have walked north."],
      n: null,
      s: 74,
      e: null,
      w: null
    },
    {"room_id": 125, "title": "A misty room", "description": "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.", "coordinates": "(58,66)", "elevation": 0, "terrain": "NORMAL", "players": [], "items": [], "exits": ["n", "e", "w"], "cooldown": 15.0, "errors": [], "messages": ["You have walked east."]},
    {"room_id": 83, "title": "A misty room", "description": "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.", "coordinates": "(59,66)", "elevation": 0, "terrain": "NORMAL", "players": [], "items": [], "exits": ["s", "e", "w"], "cooldown": 15.0, "errors": [], "messages": ["You have walked east."]},
  ];

  return (
      <div style={{
        height: "95vh", 
        width: "95vw", 
        position: "relative", 
        overflow: "auto", 
        backgroundColor: "#666",
        display: "grid"
        }}>
        {mapData.map(room => {
          return (<Room room={room} key={room.room_id} />);
        })}
      </div>
  );
};

export default Map;
