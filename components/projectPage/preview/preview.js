import React from 'react'
import styles from './Preview.module.scss'

export default function Preview({ quote }) {
    return (
        <section className={styles['preview-container']}>
            <h2>{quote}</h2>
            <div className={styles['dimmer']}></div>
        </section>
    )
}
