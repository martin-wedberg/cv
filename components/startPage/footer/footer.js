import React from 'react'
import styles from './Footer.module.scss'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <section className={styles['footer-container']}>
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
        </section>
    )
}
