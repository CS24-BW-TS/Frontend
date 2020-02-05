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
import w from "./assets/we.png";
import ws from "./assets/ws.png";
import wse from "./assets/wse.png";
import we from "./assets/we.png";
import e from "./assets/e.png";
import Box from "@material-ui/core/Box";

const Room = ({ room }) => {
  const getCoords = coords => {
    let split = coords.split(",");
    return [
      parseInt(split[0].slice(1), 10),
      parseInt(split[1].slice(0, -1), 10)
    ];
  };

  let url = "";
  if (room.n_to && room.n_to !== null) {
    url += "n";
  }
  if (room.w_to && room.w_to !== null) {
    url += "w";
  }
  if (room.s_to && room.s_to !== null) {
    url += "s";
  }
  if (room.e_to && room.e_to !== null) {
    url += "e";
  }

  return (
    <Box>
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
          width: 64,
          height: 64,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "auto auto"
        }}
      >
        {getCoords(room.coordinates)}
      </div>
    </Box>
  );
};

export default Room;
