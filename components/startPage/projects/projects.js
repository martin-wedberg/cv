import React from 'react'
import styles from './Projects.module.scss'
import Project from './project/project'

export default function Projects({ projectItems }) {

    return (
        <section className={styles['projects-container']}>
            <h2 className={'section-title'}>Projects</h2>
            <div className={styles['projects-grid']}>
            {projectItems.length > 0
                ? projectItems.map((p) => (
                    <Project
                    alt={p.fields.alt}
                    key={p.fields.name}
                    image={p.fields.image.fields.file.url}
                    name={p.fields.name}
                    position={p.fields.position}
                    />
                ))
                : null}
            </div>
        </section>
    )
}
