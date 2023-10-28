import Link from 'next/link'
import React from 'react'
import styles from './RecommendCard.module.scss'
import recommendCardIcon from '../../../../../public/icons/recommendCardIcon.svg'
import Image from 'next/image'
const RecommendCard = () => {
  return (
    <div className={styles.recommendCard}>
      <div className={styles.recommendCard_top}>
        <Image alt='recommendCard' src={recommendCardIcon} width={67} height={64} />
        <p className={styles.recommendCard_top_title}>¿No te interesaría aprender a controlar tus gastos?</p>
      </div>
      <div className={styles.recommendCard_bot}>
        <p>Aprende con el ABC del BCP</p>
        <Link className={styles.recommendCard_bot_link} href={'/'} >Cursos</Link>
      </div>
    </div>
  )
}

export default RecommendCard
