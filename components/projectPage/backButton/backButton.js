import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './BackButton.module.scss'

export default function BackButton() {
    /* const [invert, setInvert] = useState(false)

    useEffect(function mount() {
        function onScroll() {
          window.scrollY > 1016 && setInvert(true)
          window.scrollY < 1016 && setInvert(false)
        }
    
        window.addEventListener("scroll", onScroll)
    
        return function unMount() {
          window.removeEventListener("scroll", onScroll)
        }
      }) */

    return (
        <Link href='/'>
            <div className={styles['back-row']}>
                <img src={'/arrow.png'} className={styles['arrow-img']}/>
                <h3>BACK HOME</h3>
            </div>
        </Link>
    )
}
