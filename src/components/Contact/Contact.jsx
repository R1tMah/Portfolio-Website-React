import React from 'react';
import { getImageUrl } from '../../utils';

import styles from "./Contact.module.css";
export const Contact = () => {
    return (
        <footer id="contact" className = {styles.container}>
            <div className = {styles.text}>
                <h2>Contact</h2>
                <p>
                    Feel free to reach out!
                </p>
            </div>
            <ul className = {styles.links}>
                <li className = {styles.link}> 
                    <img src = {getImageUrl("contact/emailIcon.png")} alt = "Email Icon"></img>
                    <a href = "mailto:rimahapatra7@gmail.com">rimahapatra7@gmail.com</a>
                </li>
                <li className = {styles.link}> 
                    <img src = {getImageUrl("contact/linkedinIcon.png")} alt = "LinkedIn Icon"></img>
                    <a href = "https://www.linkedin.com/in/ritvik-mahapatra-47213023a/">linkedin.com/ritvik-mahapatra-47213023a/</a>
                </li>
                <li className = {styles.link}> 
                    <img src = {getImageUrl("contact/githubIcon.png")} alt = "GitHub Icon"></img>
                    <a href = "https://github.com/R1tMah">github.com/R1tMah</a>
                </li>
            </ul>
        </footer>
    )
}