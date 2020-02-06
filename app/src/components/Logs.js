import React, {useContext} from 'react';
import {MapContext} from "../state/StateManagement";
import makeStyle from '@material-ui/core/styles/makeStyles'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyle({

});

const Logs = (props) => {
  const {value} = useContext(MapContext);
  const {logs} = value;
  let logsList = props.logs;
  console.log(logsList);


  return (
    <div className='logs' >
      {/*shows responses from the server */}
      {/*{logs.length > 0 && logs.map(line => <Typography color={"primary"}>{line.title}</Typography>)}*/}
      {console.log(logs)}
      {logsList.map((l, i) => {
        return (
          <p className='log-message' key={i}>
            {l}
          </p>
        );
      })}
    </div>
  );
};

export default Logs;