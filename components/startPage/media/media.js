import React from 'react'
import MediaItem from './mediaItem/mediaItem'
import styles from './Media.module.scss'

export default function Media() {
    return (
        <section className={styles['media-container']}>
            <h2 className={'section-title'}>Media</h2>
            <div className={styles['content-section']}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam posuere est quis quam ultricies egestas. 
                    Proin aliquet nisi ac dui tincidunt consequat mollis at libero. 
                    Morbi interdum tristique ligula, ut interdum nisl aliquet vitae. Phasellus porta est nec condimentum placerat. 
                </p>
                <div className={styles['article-section']}>
                    <MediaItem
                        title='mLearn 2020'
                        image='/media/mLearn.png'
                        alt='mLearn logo'
                        description='A scientific paper published for the mLearn 2020 conference.'
                        link='https://www.iamlearn.org/mlearn2020_Proceedings/007_mLearn_2020_paper_8.pdf'
                    />
                    <MediaItem
                        title='KTH News'
                        image='/media/kthNews.png'
                        alt='KTH News logo'
                        description='An article about a visualization tool I built as a final project during a visualization course at KTH.'
                        link='https://www.mynewsdesk.com/se/kth/pressreleases/enkelt-att-se-hur-riksdagsledamoeterna-roestar-2882124'
                    />
                    <MediaItem
                        title='Master Thesis'
                        image='/media/masterThesis.png'
                        alt='Master thesis image'
                        description='My master thesis project at KTH. The project would later spawn the mLearn paper.'
                        link='https://kth.diva-portal.org/smash/record.jsf?dswid=-3790&pid=diva2%3A1465510&c=1&searchType=SIMPLE&language=en&query=martin+wedberg&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all'
                    />
                    <MediaItem
                        title='Bachelor Thesis'
                        image='/media/bachelorThesis.png'
                        alt='Bachelor thesis image'
                        description='My bachelor thesis paper. During the project we developed a web application to facilitate the memorization of word sequences.'
                        link='https://kth.diva-portal.org/smash/record.jsf?dswid=-3790&pid=diva2%3A1225409&c=2&searchType=SIMPLE&language=en&query=martin+wedberg&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all'
                    />
                </div>
            </div>
        </section>
    )
}
