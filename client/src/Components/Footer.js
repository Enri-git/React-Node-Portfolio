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
                <span>
                    <p>MADE with</p><img src="../img/coffee-solid.svg" alt="coffee-fontowsome" />
                </span>
            </footer>
        )
    }
}
