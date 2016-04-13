let React = require('react');
let ReactDOM = require('react-dom');
let { Route, Router, IndexRoute, hashHistory } = require('react-router');

let { Countdown } = require('Countdown');
let { Main } = require('Main');
let { Timer } = require('Timer');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);
