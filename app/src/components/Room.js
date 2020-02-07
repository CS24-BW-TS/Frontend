import React from "react";
import nwse from "./assets/nwse.png";
import n from "./assets/n.png";
import ne from "./assets/ne.png";
import ns from "./assets/ns.png";
import nse from "./assets/nse.png";
import nw from "./assets/nw.png";
import nwe from "./assets/nwe.png";
import nws from "./assets/nws.png";
import s from "./assets/s.png";
import se from "./assets/se.png";
import w from "./assets/w.png";
import ws from "./assets/ws.png";
import wse from "./assets/wse.png";
import we from "./assets/we.png";
import e from "./assets/e.png";
import Box from "@material-ui/core/Box";

const Room = ({ room }) => {
  const getCoords = coords => {
    let split = coords.split(",");
    let x = (parseInt(split[0].slice(1), 10))
    let y = (parseInt(split[1].slice(0, -1), 10))
    let adjustedx = (x - 46) * 30
    let adjustedy = (y - 50) * 30
    return [
      adjustedx, adjustedy
    ];
  };

  const coords = getCoords(room.coordinates)

  let url = ""
  
  if (room.exits && room.exits.includes("n")) {
    url += "n";
  }
  if (room.exits && room.exits.includes("w")) {
    url += "w";
  }
  if (room.exits && room.exits.includes("s")) {
    url += "s";
  }
  if (room.exits && room.exits.includes("e")) {
    url += "e";
  }
 
  return (
      <div
        style={{
          backgroundImage:
            (url === "e" && `url(${e})`) ||
            (url === "n" && `url(${n})`) ||
            (url === "ne" && `url(${ne})`) ||
            (url === "ns" && `url(${ns})`) ||
            (url === "nse" && `url(${nse})`) ||
            (url === "nw" && `url(${nw})`) ||
            (url === "nwe" && `url(${nwe})`) ||
            (url === "nws" && `url(${nws})`) ||
            (url === "nwse" && `url(${nwse})`) ||
            (url === "s" && `url(${s})`) ||
            (url === "se" && `url(${se})`) ||
            (url === "w" && `url(${w})`) ||
            (url === "w" && `url(${ws})`) ||
            (url === "wse" && `url(${wse})`) ||
            (url === "we" && `url(${we})`) ||
            (url === "ws" && `url(${ws})`),
          width: 30,
          height: 30,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          left: coords[0],
          bottom: coords[1]
        }}
      >{room.room_id}
      </div>
  );
};

export default Room;
