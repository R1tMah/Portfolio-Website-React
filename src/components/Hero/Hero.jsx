import React from "react";
import {getImageUrl} from  "../../utils";
import styles from "./Hero.module.css"
export const Hero = () => {
    return <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Ritvik!</h1>
            <p className={styles.description}>
                I'm a computer science student at University of Maryland. I am experienced in Python, Java, and more. Reach out if you'd like to learn more! 
            </p>
            <a href = "mailto: rimahapatra7@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src = {getImageUrl("hero/IMG_7593.jpg")} alt = "Hero image of me" className = {styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.topBlur} />
    </section>
}