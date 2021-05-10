import React from 'react'
import styles from './Preview.module.scss'

export default function Preview() {
    return (
        <section className={styles['preview-container']}>
            <h2>“Really nice quote here or something similar”</h2>
            <div className={styles['dimmer']}></div>
        </section>
    )
}
