import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
import '../assets/works.scss';

export default class extends Component {
    componentDidMount() {
        this.props.showNavHandler(this.props.location.pathname)
    }
    render() {
        return (
            <section id="works">
                <div>
                    <h1>Works</h1>
                </div>

                <figure className="worksContainer">
                    <figcaption>
                        <h2
                            style={{
                                borderBottom: '3px solid rgb(206, 206, 199)'
                            }}>
                            Demidoff Viaggi
                            </h2>
                        <p>Tourist Agency</p>
                    </figcaption>
                    <Reveal left>
                        <div className="box">
                            <a className="mask" href="https://www.demidoffviaggi.com/" target="_blank" rel="noopener noreferrer">
                                <img src="../img/demidoff-viaggi.png" alt="Demidoff viaggi" />
                            </a>
                        </div>
                    </Reveal>

                    <figcaption>
                        <h2
                            style={{
                                borderBottom: '3px solid #000'
                            }}>
                            Ciabilli
                            </h2>
                        <p>Industrial Equipment</p>
                    </figcaption>
                    <Reveal right>
                        <div className="box">
                            <a className="mask" href="http://www.ciabilli.it/" target="_blank" rel="noopener noreferrer">
                                <img src="../img/ciabilli.jpg" alt="Demidoff viaggi" />
                            </a>
                        </div>
                    </Reveal>

                    <Reveal left>
                        <figcaption>
                            <h2 style={{
                                borderBottom: '3px solid rgb(250, 207, 186)'
                            }}>Progetto Ombra</h2>
                            <p>Outdoor technical blinds and <br /> solar shading</p>
                        </figcaption>
                        <div className="box">
                            <a className="mask" href="http://www.progettombra.it" target="_blank" rel="noopener noreferrer">
                                <img src="../img/progettombra.jpg" alt="Demidoff viaggi" />
                            </a>
                        </div>
                    </Reveal>
                </figure>
            </section>
        )
    }
}
