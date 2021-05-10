import React from 'react'
import styles from './Process.module.scss'

export default function Process() {
    return (
        <section className={styles['process-container']}>
            <div className={styles['left-col']}>
                <h3 className={styles['subtitle']}>THE PROCESS</h3>
                <h2 className={styles['title']}>How was the application designed?</h2>
                <div className={styles['processes']}>
                    <div className={styles['process-item']}>
                        <h3 className={styles['heading']}>Methods</h3>
                        <ul>
                            <li><h3>Lorem</h3></li>
                            <li><h3>Lorem</h3></li>
                            <li><h3>Lorem</h3></li>
                            <li><h3>Lorem</h3></li>
                        </ul>
                    </div>
                    <div className={styles['process-item']}>
                        <h3 className={styles['heading']}>Technologies</h3>
                        <ul>
                            <li><h3>Ipsum</h3></li>
                            <li><h3>Ipsum</h3></li>
                            <li><h3>Ipsum</h3></li>
                            <li><h3>Ipsum</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['right-col']}></div>
        </section>
    )
}
