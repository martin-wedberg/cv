import React from 'react'
import styles from './Takeaways.module.scss'

export default function Takeaways() {
    return (
        <section className={styles['takeaways-container']}>
            <div className={styles['left-col']}>
                <h3 className={styles['subtitle']}>KEY TAKEAWAYS</h3>
                <h2 className={styles['title']}>What did I learn from this project?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ipsum libero, vel mollis mauris pharetra non. Quisque ultricies eros ipsum, eu porttitor erat pharetra in. Cras dapibus, arcu sed imperdiet auctor, est massa finibus est, ut lacinia massa purus ut lectus. Maecenas viverra elit sed blandit elementum. Morbi nisl nisi, molestie a sapien ut, tincidunt malesuada ex. Vivamus placerat, arcu at mattis eleifend, diam ex tincidunt diam, sit amet volutpat metus turpis sed odio.</p>
            </div>
        </section>
    )
}
