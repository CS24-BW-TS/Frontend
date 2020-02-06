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
  const [logs, setLogs] = useState([]);
  const [value, setContextValue] = useState({
    logs: [],
    rooms: []
  });
  const addToLogs = (msg) => {
    setLogs([...logs, msg]);
  };
  return (
    <div className="App">
      <MapContext.Provider value={{value, setContextValue}}>
        <MuiThemeProvider theme={styleTheme}>
        <header className="App-header">
          <div className='game'>
            <Map />
            <UserInfo token={token} setToken={setToken} addToLogs={addToLogs} />
            <Logs logs={logs} />
          </div>
        </header>
        </MuiThemeProvider>
      </MapContext.Provider>
    </div>
  );
}

export default App;
