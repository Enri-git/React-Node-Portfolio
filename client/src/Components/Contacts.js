import React, { Component } from 'react';
import '../assets/contacts.scss';
import axios from 'axios';

export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmit: false,
            sendMessage: "",
        }
        this.refName = React.createRef();
        this.refEmail = React.createRef();
        this.refMessage = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.showNavHandler(this.props.location.pathname);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ isSubmit: true })
        axios({
            method: "POST",
            url: '/api/form',
            data: {
                Name: this.refName.current.value,
                Email: this.refEmail.current.value,
                Message: this.refMessage.current.value
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                this.setState({ sendMessage: "Thank you for your Message!!" })
                //window.location.reload();
            } else if (response.data.msg === 'fail') {
                this.setState({ sendMessage: "Try again!!" })
            }
        }).catch(err => {
            this.setState({ sendMessage: "There was a problem with server, please don't try again, contact this person Ahmad.k.youssef@gmail.com!!" })
        })
    };

    render() {
        return (
            <section id="contacts" style={{ borderColor: '#FACFBA' }}>
                <div className="d-flex">
                    <div>
                        <h1>Contacts</h1>
                        <p>I am searching for an Internship and of course for a Job! <br />I am eager to learn and to give my contribution. <br />If you are interested to know me better or to take a coffee, send me an email.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name<sup>*</sup></label>
                        <input type="text" ref={this.refName} required />
                        <label>E-mail<sup>*</sup></label>
                        <input type="email" ref={this.refEmail} required />
                        <label>Message<sup>*</sup></label>
                        <textarea ref={this.refMessage} required />
                        <button
                            type="submit"
                            value="submit"
                            style={{
                                background: '#121019',
                                color: '#fff',
                                padding: '1.2rem 2.7rem',
                                border: '0',
                                borderRadius: 3,
                                cursor: 'pointer',
                                fontSize: '1em',
                                marginBottom: '15px'
                            }}>
                            SEND
                        </button>
                        {this.state.isSubmit && <div className="msg">{this.state.sendMessage}</div>}
                    </form>
                </div>
            </section>

        )
    }
}
