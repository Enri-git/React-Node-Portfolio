import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/ToggleMenu.scss';

export default class ToggleMenu extends Component {
    state = {
        showMenu: false
    }

    showMenu = (event) => {
        event.preventDefault();
        // this.setState({ showMenu: true }, () => {
        //     document.addEventListener('click', this.closeMenu)
        // });
        this.setState({ showMenu: !this.state.showMenu })
    }
    // closeMenu = () => {
    //     this.setState({ showMenu: false }, () => {
    //         document.removeEventListener('click', this.closeMenu)
    //     });
    // }

    render() {
        console.log(this.state.showMenu);
        return (
            <>
                <button className="res-btn" onClick={this.showMenu}>
                    ||
                </button>
                {
                    this.state.showMenu ?
                        <div className="toggle-menu">
                            <NavLink to="./">HOME</NavLink>
                            <NavLink to="/SKILLS">SKILLS</NavLink>
                            <NavLink to="/WORKS">WORKS</NavLink>
                            <NavLink to="/CONTACTS">CONTACTS</NavLink>
                        </div> : null
                }
            </>
        )
    }
}
