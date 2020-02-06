import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Room from "./Room";
import { getRooms } from "../state/StateManagement"

import {mapData} from './mapData.js'

const Map = props => {

  const roomData = useContext(getRooms)

  if (!roomData) {
    return (
      <div style={{
        width: "100vw",
        height: 1440,
        position: "relative", 
        overflow: "auto"
        }}>
        {mapData.map(room => {
          return (<Room room={room} key={room.room_id} />);
        })}
      </div>
    )
  }

  return (
      <div style={{
        width: "80vw",
        height: 1440,
        position: "relative", 
        overflow: "auto"
        }}>
        {roomData.map(room => {
          return (<Room room={room} key={room.room_id} />);
        })}
      </div>
  );
};

export default Map;
