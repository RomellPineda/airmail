import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Log in with Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key="3"><a href="/api/logout">Log out</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper deep-purple darken-1">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo"><i className="material-icons" style={{ padding: '0 0 0 15px'}}>filter_drama</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* to reference javaScript in JSX use curly braces */}
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);