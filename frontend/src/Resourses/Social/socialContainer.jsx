
import { faGoogle, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './socialContainer.css';

const SocialContainer = () => {
    return (
        <div className="social-container">
            <ul>
                <li className="item">
                        <a href="https://www.instagram.com" >
                                <FontAwesomeIcon className="icon"icon={faInstagram} />
                        </a>
                </li>
                <li className="item">
                    <a href="https://www.google.com">
                            <FontAwesomeIcon className="icon"icon={faGoogle} />
                    </a>
                </li>  
                <li className="item">
                    <a href="https://www.linkedin.com">
                            <FontAwesomeIcon className="icon"icon={faLinkedin} />
                    </a>
                </li>  
                <li className="item">
                    <a href="https://www.github.com">
                            <FontAwesomeIcon className="icon"icon={faGithub} />
                    </a>
                </li>              
           </ul>
        </div>
    );
}

export default SocialContainer;