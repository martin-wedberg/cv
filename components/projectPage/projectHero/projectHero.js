import React from 'react'
import styles from './ProjectHero.module.scss'

export default function ProjectHero({ title, subtitle }) {
    return (
        <section className={styles['project-hero-container']}>
            <div className={styles['title-col']}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </section>
    )
}
