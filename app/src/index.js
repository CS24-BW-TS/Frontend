import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme} from '@material-ui/core/styles';

export const styleTheme = createMuiTheme({
    palette: {
        primary: {main: "#fffcf6",},
        secondary: {main: "#ffce0b",}
    },
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
