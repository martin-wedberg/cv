import React from 'react'
import styles from './Overview.module.scss'

export default function Overview() {
    return (
        <section className={styles['overview-container']}>
            <div className={styles['left-col']}>
                <h3 className={styles['subtitle']}>ABOUT THE PROJECT</h3>
                <h2 className={styles['title']}>Creating an interface for nurses and caretakers</h2>
                <div className={styles['info-group']}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ipsum libero, vel mollis mauris pharetra non. Quisque ultricies eros ipsum, eu porttitor erat pharetra in. Cras dapibus, arcu sed imperdiet auctor, est massa finibus est, ut lacinia massa purus ut lectus. Maecenas viverra elit sed blandit elementum. Morbi nisl nisi, molestie a sapien ut, tincidunt malesuada ex. Vivamus placerat, arcu at mattis eleifend, diam ex tincidunt diam, sit amet volutpat metus turpis sed odio.</p>
                    <div className={styles['right-col']}>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Role</h3>
                            <h3>UX Designer</h3>
                        </div>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Client</h3>
                            <h3>Svenskt Demenscentrum</h3>
                        </div>
                        <div className={styles['col-item']}>
                            <h3 className={styles['heading']}>Time</h3>
                            <h3>Jan 2020 - Oct 2020</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
