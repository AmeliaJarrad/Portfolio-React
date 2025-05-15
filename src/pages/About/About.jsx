
import classes from './About.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  } from '@fortawesome/free-solid-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'


export default function About() {
    return (
      <div className={classes.main}>
            <div className={classes.landing}>
                <div className={classes.landing__text_container}>
                    <h1 className={classes.landing_heading}>Hi I'm Amelia </h1>
                    <p>I'm a trainee web developer with Nology </p>
                    <p> I'm a peppy self-confessed dork with a life-long love of learning. I love tech because it's constantly changing, and that dynamic nature means there's always something new to learn. After spending more than 11 years in Tech Support, learning to code has been an amazing challenge.
                    </p>
                </div>
                <div className={classes.landing__image_container}>
                    <img className={classes.landing__image_container__portrait} src='./src/assets/Amelia_Portrait.jpg' alt='portrait'/>
                </div>    
            </div>
            <div className={classes.techBox}>
                <h2 className={classes.landing_heading}>Tech Skills</h2>
                <p className={classes.landing}>HTML, CSS, SCSS (Sass), Python, JavaScript, React </p>
                <div className={classes.techBox__iconsRow}>
                < classNameFontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss} />
                 <FontAwesomeIcon icon={faSass} />
                 <FontAwesomeIcon icon={faPython} />
                 <FontAwesomeIcon icon={faJs} />
                 <FontAwesomeIcon icon={faReact} />
                </div>
            </div>

        </div>
    
        
    );
  }
