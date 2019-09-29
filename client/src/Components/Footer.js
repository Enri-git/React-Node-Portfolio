import React, { Component } from 'react';
import '../assets/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li><a href="https://github.com/Enri-git" target="_blank" rel="noopener noreferrer"><img src="../img/github.png" alt="github" /></a></li>
                    <li><a href="https://www.xing.com/contacts/requests" target="_blank" rel="noopener noreferrer"><img src="../img/xing.png" alt="king" /></a></li>
                    <li><a href="https://www.linkedin.com/in/enrica-berti-ab935557/" target="_blank" rel="noopener noreferrer"><img src="../img/linkedin.png" alt="linkedin" /></a></li>
                </ul>
                <p>MADE with <i style={{ fontSize: 24 + 'px' }} className="fa">&#xf0f4;</i></p>
            </footer>
        )
    }
}
