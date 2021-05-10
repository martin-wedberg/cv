import React from 'react'
import { useRouter } from 'next/router'
import styles from './ProjectHero.module.scss'

export default function ProjectHero({ title }) {
    return (
        <section className={styles['project-hero-container']}>
            <div className={styles['title-col']}>
                <h1>{title}</h1>
                <h3>Created for Svenskt Demenscentrum</h3>
            </div>
        </section>
    )
}
