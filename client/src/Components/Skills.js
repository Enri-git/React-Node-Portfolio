import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../assets/skill.scss';

// import { fadeIn } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';

export default class Skills extends Component {
    componentDidMount() {
        this.props.showNavHandler(this.props.location.pathname)
    }

    render() {
        return (
            <section id="skill" style={{ borderColor: '#CECEC7' }}>
                <div className="d-flex">
                    <div>
                        <h1>Skills</h1>
                        <p>
                            In Düsseldorf, I attended a one year course that It gave me the possibility to increase my knowledge in JavaScript, React and in backend side, going through with the development of small Web-Apps based on React and NodeJs.
                            I am collaborating also for Web-sites Project based on Wordpress. Now is the time for a new challenge in this field developing real projects.
                        </p>
                    </div>
                    <aside>
                        <Fade top cascade>
                            <h3>HTML5</h3>
                            <h4 className="rotate-90-cw">CSS3</h4>
                            <h3>Bootstrap </h3>
                            <h4 className="rotate-90-cw">JavaScript</h4>
                            <h3 className="rotate-90-cw">GIT</h3>
                            <h4>React</h4>
                            <h3 className="rotate-90-cw">NodeJs</h3>
                            <h4>Express.js  </h4>
                            <h3> Figma</h3>
                            <h4>mongoDB</h4>
                        </Fade>
                    </aside>
                </div>
            </section>
        )
    }
}
