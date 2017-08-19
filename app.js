import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from './src/';
import config from './config/';

ReactDOM.render(
    <Router key="main" history={hashHistory} routes={config} />, document.getElementById('container'));

