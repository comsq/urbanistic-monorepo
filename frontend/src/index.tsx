import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from "./common-components/Header";

ReactDOM.render(
    <Header />
    , document.getElementById('root'));

serviceWorker.unregister();
