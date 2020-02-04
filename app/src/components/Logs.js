import React, {useContext} from 'react';
import {MapContext} from "../state/StateManagement";
import makeStyle from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyle({

});

const Logs = (props) => {
  const  logs = useContext(MapContext);


  return (
    <div className='logs' >
      {/*shows responses from the server */}
      {logs.length > 0 && logs.map(line => <p>{line}</p>)}
      {console.log(logs)}
    </div>
  );
};

export default Logs;