import React, { Component } from 'react';
import Button from './button';
import '../assets/intro.scss';


export default class Intro extends Component {
    state = {
        hidden: true
    }
    componentDidMount() {
        this.props.showNavHandler(this.props.location.pathname)
    }
    handleOnClick = () => {
        this.setState({ hidden: !this.state.hidden });
    }
    render() {
        // I pass the history(inside of the props) instead of the props that comes from router
        return (
            <section id="intro">
                <p>
                    HI! I´m a <strong>Frontend Developer</strong> or at least, this is my goal. I worked as a Freelancer for a Web-Agency in Florence and after a two years break, during which I worked as Event Manager for Medical Congresses, I´ve decided to move in Düsseldorf and to undertake a new challenge and increase my knowledge as Frontend Developer. <br /><strong>Simplicity, Efficiency, Style, Problem Solving are my keywords</strong>.
                </p>
                <aside>
                    <article style={{ backgroundColor: '#CECEC7' }}>
                        <Button history={this.props.history}>SKILLS</Button>
                        <img src="../img/blob.png" alt="skills" />
                    </article>
                    <article>
                        <img src="../img/globe.svg" alt="works" />
                        <Button history={this.props.history}>WORKS</Button>
                    </article>
                    <article style={{ backgroundColor: '#FACFBA' }}>
                        <Button history={this.props.history}>CONTACTS</Button>
                        <img src="../img/wave.png" alt="contacts" />
                    </article>
                </aside>
            </section >
        )
    }
}
