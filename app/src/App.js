import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import UserInfo from "./components/UserInfo";
import Logs from "./components/Logs";
import {contextValue, MapContext} from './state/StateManagement';

// we need some state management here to hold the map, and logic for when you interact with out own backend vs the public lambda server
function App() {
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <MapContext.Provider value={contextValue} >
        <header className="App-header">
          <div className='game'>
            <Map />
            <UserInfo token={token} setToken={setToken} />
            <Logs />
          </div>
        </header>
      </MapContext.Provider>
    </div>
  );
}

export default App;
