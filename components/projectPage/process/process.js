import React from 'react'
import styles from './Process.module.scss'

export default function Process({ title, methods, technologies }) {
    return (
        <section className={styles['process-container']}>
            <div className={styles['left-col']}>
                <h3 className={styles['subtitle']}>THE PROCESS</h3>
                <h2 className={styles['title']}>{title}</h2>
                <div className={styles['processes']}>
                    <div className={styles['process-item']}>
                        <h3 className={styles['heading']}>Methods</h3>
                        <ul>
                            {methods.length > 0 && methods.map((method) => (<li><h3>{method.method}</h3></li>))}
                        </ul>
                    </div>
                    <div className={styles['process-item']}>
                        <h3 className={styles['heading']}>Technologies</h3>
                        <ul>
                            {technologies.length > 0 && technologies.map((technology) => (<li><h3>{technology.technology}</h3></li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['right-col']}></div>
        </section>
    )
}
