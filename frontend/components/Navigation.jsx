let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <div className="menu">
                        <li className="menu-text">
                            <a href="https://github.com/thebasix/react-timer-app" target="_blank">GitHub</a>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = { Navigation };