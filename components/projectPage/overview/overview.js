import React from 'react'
import styles from './Overview.module.scss'

export default function Overview({ title, description, client, role, time }) {
    return (
        <section className={styles['overview-container']}>
            <div className={styles['left-col']}>
                <h3 className={styles['subtitle']}>ABOUT THE PROJECT</h3>
                <h2 className={styles['title']}>{title}</h2>
                <div className={styles['info-group']}>
                    <p>{description}</p>
                    <div className={styles['right-col']}>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Role</h3>
                            <h3>{role}</h3>
                        </div>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Client</h3>
                            <h3>{client}</h3>
                        </div>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Time</h3>
                            <h3>{time}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
