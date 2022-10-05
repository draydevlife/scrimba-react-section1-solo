import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__social-links">
                <li>                
                    <a href="https://www.linkedin.com/in/derrickray/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>                
                    <a href="https://github.com/draydevlife">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </li>
                <li>                
                    <a href="https://twitter.com/draydevlife">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}