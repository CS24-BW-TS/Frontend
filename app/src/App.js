import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import UserInfo from "./components/UserInfo";
import Logs from "./components/Logs";
import {contextValue, MapContext, updateState} from './state/StateManagement';
import {styleTheme} from "./index";
import {MuiThemeProvider} from '@material-ui/core/styles';

// we need some state management here to hold the map, and logic for when you interact with out own backend vs the public lambda server

function App() {
  const [token, setToken] = useState('');
  const [value, setContextValue] = useState({
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
  });
  return (
    <div className="App">
      <MapContext.Provider value={{value, setContextValue}}>
        <MuiThemeProvider theme={styleTheme}>
        <header className="App-header">
          <div className='game'>
            <Map />
            <UserInfo token={token} setToken={setToken} />
            <Logs />
          </div>
        </header>
        </MuiThemeProvider>
      </MapContext.Provider>
    </div>
  );
}

export default App;
