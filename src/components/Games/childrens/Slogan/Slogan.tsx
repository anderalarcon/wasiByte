import Image from 'next/image'
import React from 'react'
import sloganCuy from '../../../../../public/images/sloganCuy.png'
import styles from './Slogan.module.scss'
import nivelsIcon from '../../../../../public/icons/nivelsIcon.svg'
import Link from 'next/link'
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.slogan_top}>
        <Image alt='slogan' src={sloganCuy.src} width={100} height={100} />
        <div className={styles.slogan_top_progress}>
          <div className={styles.slogan_top_progress_top}>
            <p>Mi progreso</p>
            <p>50%</p>
          </div>
          <div className={styles.slogan_top_progress_mid}>
            <div className={styles.slogan_top_progress_mid_bar}>
              <div className={styles.slogan_top_progress_mid_bar_inside}></div>
            </div>
          </div>
          <Link href={'/tbd'} className={styles.slogan_top_progress_bot}>
            ¿Cómo ganar más puntos?
          </Link>
        </div>
      </div>
      <div className={styles.slogan_bot}>
        <p className={styles.slogan_bot_title}>El camino del cuy</p>
        <p className={styles.slogan_bot_desc}>
          ¡Resuelve las preguntas del cuy y gana puntos!
        </p>
        <div className={styles.slogan_bot_nivels}>
          <div className={styles.slogan_bot_nivels_left}>
            <p>Nivel: Blanco</p>
            <p>50 ptos</p>
          </div>
          <Image
            className={styles.slogan_bot_nivels_right}
            src={nivelsIcon.src}
            width={100}
            height={100}
            alt='nivels Icon'
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Slogan
