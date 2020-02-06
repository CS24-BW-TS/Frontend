import React, { useState, useContext, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Room from './Room'
import { getRooms, MapContext } from '../state/StateManagement'

import { mapData } from './mapData.js'

const Map = props => {
  const { setContextValue, value } = useContext(MapContext)
  const { rooms } = value
  useEffect(() => {
    getRooms(setContextValue)
  }, [])

  if (rooms.length > 0) {
    return (
      <div
        style={{
          width: '100vw',
          height: 1440,
          position: 'relative',
          overflow: 'auto'
        }}
      >
        {rooms.map(room => {
          return <Room room={room} key={room.room_id} />
        })}
      </div>
    )
  }

  return (
    <div
      style={{
        width: '80vw',
        height: 1440,
        position: 'relative',
        overflow: 'auto'
      }}
    >
      {rooms.map(room => {
        return <Room room={room} key={room.room_id} />
      })}
    </div>
  )
}

export default Map
