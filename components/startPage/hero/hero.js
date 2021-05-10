import React from 'react'
import styles from './Hero.module.scss'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
    return (
        <section className={styles['hero-container']}>
            <img src={'/foreground.png'} className={styles['image']}></img>
            <div className={styles['col-right']}>
                <h1>Martin Wedberg</h1>
                <h3>Frontend Developer | Creative Engineer | UX Designer</h3>
                <div className={styles['social-media-container']}>
                    <a href='mailto:status.martin@gmail.com' target="_blank">
                        <FontAwesomeIcon className={styles['social-media-icon']} icon={faEnvelope} />
                    </a>
                    <a href='https://open.spotify.com/artist/4w3CKpPNZ2YoSHut5TVByr?si=9eIVnT7KR6WTVUjT5GVARQ' target="_blank">
                        <FontAwesomeIcon className={styles['social-media-icon']} icon={faSpotify} />
                    </a>
                    <a href='https://github.com/martin-wedberg' target="_blank">
                        <FontAwesomeIcon className={styles['social-media-icon']} icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/martin-wedberg/' target="_blank">
                        <FontAwesomeIcon className={styles['social-media-icon']} icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </section>
    )
}
