import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/navigation.scss';
import logo from '../logo.png';
import ToggleMenu from './ToggleMenu';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="App-logo">
                    <img src={logo} alt="logo" />
                </Link>
                {
                    this.props.isHome ?
                        <>
                            <ToggleMenu />
                            <nav>
                                <ul>
                                    <li><NavLink to="./">HOME</NavLink></li>
                                    <li><NavLink to="/SKILLS">SKILLS</NavLink></li>
                                    <li><NavLink to="/WORKS">WORKS</NavLink></li>
                                    <li><NavLink to="/CONTACTS">CONTACTS</NavLink></li>
                                </ul>
                            </nav>
                        </> : null

                }
            </div>
        )
    }
}
