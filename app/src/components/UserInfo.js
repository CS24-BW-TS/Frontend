import React, {useContext, useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import move from '../http/move'
import {MapContext} from "../state/StateManagement";
import init from "../http/init";
import { sell, confirmSell, autoSell } from "../http/sell";
import pray from "../http/shrine";
import take from "../http/take";
import { carry, receive } from "../http/carry";
import drop from "../http/drop";
import examine from "../http/examine";
import { wear, undress } from '../http/equipment';
import change_name from "../http/name";
import status from "../http/player";


const UserInfo = (props) => {
    let token = props.token;
    let setToken = props.setToken;
    const [cooldown, setCooldown] = useState(0); // going to hold a target date object
    const [takeF, setTake] = useState('');
    const [dropF, setDrop] = useState('');
    const [wearF, setWear] = useState('');
    const [unequipF, setUnequip] = useState('');
    const [examineF, setExamine] = useState('');
    const [sellF, setSell] = useState('');
    const [carryF, setCarry] = useState('');
    const [nameF, setName] = useState('');
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

    const playerStatus = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        status(token)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };

    const takeItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        take(token, takeF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const dropItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        drop(token, dropF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const wearItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        wear(token, wearF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const undressItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        undress(token, unequipF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const examineItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        examine(token, examineF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const sellItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        sell(token, sellF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => {
              console.log(e);
          });
    };

    const confirmSellItem = (e, decision) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        confirmSell(token, sellF, decision)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };

    const autoSellItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        autoSell(token, sellF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };

    const carryItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        carry(token, carryF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };

    const receiveItem = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        receive(token)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };
    const prayShrine = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        pray(token)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
    };

    const changeName = (e) => {
        e.preventDefault();
        if(!checkCooldown()) return false;
        change_name(token, nameF)
          .then(res => {
              console.log(res);
              updateCooldown(res.cooldown);
          })
          .catch(e => console.log(e));
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
                <Button variant='contained' color='secondary' onClick={playerStatus}>Player Status</Button>
                <br />
                <TextField id='take-name' label='Take What?' value={takeF} onChange={setTake} />
                <Button variant='contained' onClick={takeItem}>Take</Button>
                <br />
                <TextField id='drop-name' label='Drop What?' value={dropF} onChange={setDrop} />
                <Button variant='contained' onClick={dropItem}>Drop</Button>
                <br />
                <TextField id='wear-name' label='Wear What?' value={wearF} onChange={setWear} />
                <Button variant='contained' onClick={wearItem}>Wear</Button>
                <br />
                <TextField id='undress-name' label='Unequip What?' value={unequipF} onChange={setUnequip} />
                <Button variant='contained' onClick={undressItem}>Unequip</Button>
                <br />
                <TextField id='examine-name' label='Examine What?' value={examineF} onChange={setExamine} />
                <Button variant='contained' onClick={examineItem}>Examine</Button>
                <br />
                <TextField id='change-name' label='New Name' value={nameF} onChange={setName} />
                <Button variant='contained' onClick={changeName}>Change Name</Button>
                <br />
                <TextField id='carry-what' label='Carry What?' value={carryF} onChange={setCarry} />
                <Button variant='contained' onClick={carryItem}>Carry (Companion)</Button>
                <Button variant='contained' color='secondary' onClick={receiveItem}> Receive (Companion)</Button>
                <br />
                <TextField id='sell-name' label='Sell What?' value={sellF} onChange={setSell} />
                <Button variant='contained' onClick={sellItem}>Sell</Button>
                <Button variant='contained' onClick={(e) => confirmSellItem(e, 'yes')}>Confirm Sale</Button>
                <Button variant='contained' onClick={(e) => confirmSellItem(e, 'no')}>Cancel Sale</Button>
                <Button variant='contained' onClick={autoSellItem}>Auto Sell</Button>
                <br />
                {/* Should only let the pray button appear when we're at a shrine */}
                <Button variant='contained' onClick={prayShrine}>Pray</Button>
            </form>
        </div>
    );
};


export default UserInfo;