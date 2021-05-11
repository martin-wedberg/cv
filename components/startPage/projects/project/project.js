import Link from 'next/link'
import styles from './Project.module.scss'

export default function Project({ alt, image, name, position, route }) {
    return (
      <Link href='/[project]' as={`/${route}`}>
        <div className={styles['container']}>
            <img alt={alt} src={image} />
          <div className={styles['text']}>
            <h2>{name}</h2>
            <h3>{position}</h3>
          </div>
        </div>
      </Link>
    )
  }
