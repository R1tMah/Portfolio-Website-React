import React from "react";
import {getImageUrl} from  "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.container} id = "about"> 
        
        <h2 className={styles.title}>About</h2>
        <div>
           
            <ul className = {styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        className = {styles.umd}
                        src={getImageUrl("about/university-of-maryland-logo-1.png")} 
                        alt = "UMD"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Computer Science Student
                        </h3>
                        <p>
                           Currently studying Computer Science at the University of Maryland, with expected graduation of December 2026. <br></br><br></br> Relevant Courses:  Data Structures with Java, Linear Algebra , Discrete Mathematics, Computer Systems with C, Algorithms, Organization of Programming Languages with Ruby and oCaml. 
                        </p>
                    </div>
                </li>
               <li className={styles.aboutItem}>
                    <img 
                        className = {styles.cursor}
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt = "UMD"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Application Development
                        </h3>
                        <p>
                            I have worked on multiple web and mobile applications throughout my time programming. I have experience in React and Flutter for front-end, and Flask and Express for back-end.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        className = {styles.server}
                        src={getImageUrl("about/serverIcon.png")} 
                        alt = "UMD"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Data Engineering and Machine Learning
                        </h3>
                        <p>
                            I enjoy working with data, numbers, and statistics. I find machine learning very interesting and have experience with different models in Python such as sci-kit-learn and TensorFlow.
                        </p>
                    </div>
                </li>
                
                

            </ul>
        </div>
        
    </section>
}