import React, {useContext, useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import move from '../http/move'
import {MapContext} from "../state/StateManagement";
import init from "../http/init";

const UserInfo = (props) => {
    let token = props.token;
    let setToken = props.setToken;
    const {setContextValue} = useContext(MapContext);
    console.log(`token: ${props.token}`);
    const updateToken = e => {
        e.preventDefault();
        setToken(e.target.value);
    };

    const moveTo = (d) => {
        //the value for next_room ?
        const next_room = 0;
        move(token, d, next_room)
            .then(res => {
                setContextValue(state =>({...state, logs: [...state.logs, res]}))
            })
            .catch(err => console.log(err))
    };

    const handleInit = () => {
        init(token)
            .then(res => {
                setContextValue(state => ({...state, logs: [...state.logs, res]}))
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='user-info'>
            <form className='user-form'>
                <TextField id='user-token' label='Token' value={token} onChange={updateToken}/>
                <Button variant='contained' onClick={() => handleInit()}>Init</Button>
                <Button variant='contained' color='primary' onClick={() => moveTo("n")}>Move North</Button>
                <Button variant='contained' color='primary' onClick={() => moveTo("e")}>Move East</Button>
                <Button variant='contained' color='primary' onClick={() => moveTo("s")}>Move South</Button>
                <Button variant='contained' color='primary' onClick={() => moveTo("w")}>Move West</Button>
                <Button variant='contained' color='secondary'>Run Algorithm</Button>
            </form>
        </div>
    );
};


export default UserInfo;