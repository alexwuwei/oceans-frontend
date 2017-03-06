'use strict';
require(__dirname + '/../sass/home/base-home.scss');
// require(__dirname + '/../sass/home/module-home.scss');
// require(__dirname + '/../sass/home/layout-home.scss');
// require(__dirname + '/../sass/home/state-home.scss');

import {Router, Route, hashHistory} from 'react-router';

const React = require('react');
const ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var Ocean = require('./ocean.jsx');
var MessageForm = require('./messageForm.jsx');
var ReplyForm = require('./replyForm.jsx');



class App extends React.Component {
    render() {
        return <Header />
    }
}
//
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Ocean}/>
        <Route path="/about" component={MessageForm}/>
        <Route path="/landing" component={App}/>

    </Router>
), document.getElementById('app'));
