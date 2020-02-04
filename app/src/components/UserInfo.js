import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const UserInfo = (props) => {
  let token = props.token;
  let setToken = props.setToken;
  const updateToken = e => {
    e.preventDefault();
    setToken(e.target.value);
  };


  return (
    <div className='user-info'>
      {// <!-- form for personal auth token, other interface stuff for commends -->
      }
      <form className='user-form'>
        <TextField id='user-token' label='Token' value={token} onChange={updateToken} />
        <Button variant='contained'>Init</Button>
        <Button variant='contained' color='primary'>Move North</Button>
        <Button variant='contained' color='primary'>Move East</Button>
        <Button variant='contained' color='primary'>Move South</Button>
        <Button variant='contained' color='primary'>Move West</Button>
        <Button variant='contained' color='secondary'>Run Algorithm</Button>
        {//<!-- As we flesh out the algorithms we might need more buttons to occupy specific tasks  -->
        }
      </form>
    </div>
  );
};


export default UserInfo;