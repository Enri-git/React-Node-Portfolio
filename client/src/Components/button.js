import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class button extends Component {
    state = {
        hidden: false
    }
    /*  buttonEffect = () => {
         this.setState({ hidden: !this.state.hidden });
     } */
    handleOnClick = () => {
        this.setState({ hidden: true });
    }
    eventHandler = () => {
        this.props.history.push(this.props.children)
        //window.location += `${this.props.children}`
    }
    render() {
        console.log(this.props.children);
        return (
            <div>
                <ParticleEffectButton
                    color='#000'
                    hidden={this.state.hidden}
                    onComplete={this.eventHandler}
                    duration={600}
                >
                    <button onClick={this.handleOnClick}
                        style={{
                            background: '#121019',
                            color: '#fff',
                            padding: '1.2rem 2.7rem',
                            border: '0',
                            borderRadius: 3,
                            cursor: 'pointer',
                            fontSize: '1em',
                        }}
                    >
                        {this.props.children}
                    </button>
                </ParticleEffectButton >
            </div>
        )
    }
}
