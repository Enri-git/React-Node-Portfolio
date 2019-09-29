import React, { Component } from 'react';
import '../assets/contacts.scss';
import axios from 'axios';

export default class Contacts extends Component {
    constructor(props) {
        super(props)
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
                document.querySelector('.msg').style.display = "block";
                window.location.reload();
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send")
            }
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
                        <div className="msg" hidden>Thank you for your Message!!</div>
                    </form>
                </div>
            </section>

        )
    }
}
