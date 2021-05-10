import React from 'react'
import styles from './About.module.scss'

export default function About() {
    return (
        <section className={styles['about-container']}>
            <h2 className={'section-title'}>About</h2>
            <div className={styles['content-section']}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam posuere est quis quam ultricies egestas. 
                    Proin aliquet nisi ac dui tincidunt consequat mollis at libero. 
                    Morbi interdum tristique ligula, ut interdum nisl aliquet vitae. Phasellus porta est nec condimentum placerat. 
                    Nullam vitae commodo nisi, quis mattis nisl. 
                    Nulla placerat diam eget justo sodales vulputate nec sed velit. 
                    Duis vehicula justo vel tellus euismod, non volutpat lectus dictum.
                </p>
                <div className={styles['experience-col']}>
                    <div className={styles['experience-grid']}>
                        <div className={styles['grid-item-category']}>Education</div>
                        <div className={styles['grid-item']}>
                            <div>Royal Institute of Technology, Stockholm</div>
                            <div className={styles['position']}>Civil engineer in media technology</div>
                            <div className={styles['time']}>2015 - 2020</div>
                        </div>
                    </div>
                    <div className={styles['experience-grid']}>
                        <div className={styles['grid-item-category']}>Experience</div>
                        <div className={styles['grid-item']}>
                            <div>Valtech</div>
                            <div className={styles['position']}>Frontend developer</div>
                            <div className={styles['time']}>Feb 2021 - present</div>
                        </div>
                        <div className={styles['grid-item']}>
                            <div>Svenskt Demenscentrum</div>
                            <div className={styles['position']}>UX designer</div>
                            <div className={styles['time']}>Jan - Oct 2020</div>
                        </div>
                        <div className={styles['grid-item']}>
                            <div>THS Armada</div>
                            <div className={styles['position']}>Frontend developer</div>
                            <div className={styles['time']}>Apr 2019 - Dec 2019</div>
                        </div>
                    </div>
                </div>
                <a className={styles['download-cv']} href='/cv-martin-wedberg.pdf' download='CV-MartinWedberg'>Download CV</a>
            </div>
        </section>
    )
}
