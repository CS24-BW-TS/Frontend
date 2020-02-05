import React, {useContext, useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import move from '../http/move'
import {MapContext} from "../state/StateManagement";
import init from "../http/init";

const UserInfo = (props) => {
    let token = props.token;
    let setToken = props.setToken;
    const [cooldown, setCooldown] = useState(0); // going to hold a target date object
    const [take, setTake] = useState('');
    const [drop, setDrop] = useState('');
    const [wear, setWear] = useState('');
    const [unequip, setUnequip] = useState('');
    const [examine, setExamine] = useState('');
    const [sell, setSell] = useState('');
    const [carry, setCarry] = useState('');
    const {setContextValue} = useContext(MapContext);
    const updateToken = e => {
        e.preventDefault();
        setToken(e.target.value);
    };

    const checkCooldown = () => {
        let now = Date.now();
        return now >= cooldown;
    };

    const updateCooldown = (cd) => {
        // convert it to ms
        setCooldown(cd * 1000 + Date.now());
    };

    const moveTo = (d) => {
        //the value for next_room ?
        if(!checkCooldown()) return false;
        const next_room = 0;
        move(token, d, next_room)
            .then(res => {
                setContextValue(state =>({...state, logs: [...state.logs, res]}));
                updateCooldown(res.cooldown);
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
                <br />
                <Button variant='contained' color='secondary'>Player Status</Button>
                <br />
                <TextField id='take-name' label='Take What?' value={take} onChange={setTake} />
                <Button variant='contained' onClick={() => console.log('take')}>Take</Button>
                <br />
                <TextField id='drop-name' label='Drop What?' value={drop} onChange={setDrop} />
                <Button variant='contained' onClick={() => console.log('drop')}>Drop</Button>
                <br />
                <TextField id='wear-name' label='Wear What?' value={wear} onChange={setWear} />
                <Button variant='contained' onClick={() => console.log('wear')}>Wear</Button>
                <br />
                <TextField id='undress-name' label='Unequip What?' value={unequip} onChange={setUnequip} />
                <Button variant='contained' onClick={() => console.log('unequip')}>Unequip</Button>
                <br />
                <TextField id='examine-name' label='Examine What?' value={examine} onChange={setExamine} />
                <Button variant='contained' onClick={() => console.log('examine')}>Examine</Button>
                <br />
                <TextField id='carry-what' label='Carry What?' value={carry} onChange={setCarry} />
                <Button variant='contained' onClick={() => console.log('carry')}>Carry (Companion)</Button>
                <Button variant='contained' color='secondary' onClick={() => console.log('receive')}> Receive (Companion)</Button>
                <br />
                <TextField id='sell-name' label='Sell What?' value={sell} onChange={setSell} />
                <Button variant='contained' onClick={() => console.log('sell')}>Sell</Button>
                <Button variant='contained' onclick={() => console.log('confirm sell yes')}>Confirm Sale</Button>
                <Button variant='contained' onClick={() => console.log('cancel sell')}>Cancel Sale</Button>
                <Button variant='contained' onclick={() => console.log('auto sell')}>Auto Sell</Button>
                <br />
                {/* Should only let the pray button appear when we're at a shrine */}
                <Button variant='contained' onclick={() => console.log('pray')}>Pray</Button>
            </form>
        </div>
    );
};


export default UserInfo;