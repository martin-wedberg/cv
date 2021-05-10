import React from 'react'
import styles from './MediaItem.module.scss'

export default function MediaItem({ title, image, description, link, alt }) {
    return (
        <div className={styles['card']}>
            <img src={image} alt={alt}/>
            <div className={styles['info']}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={link} target='_blank'>Read More</a>
            </div>
        </div>
    )
}
