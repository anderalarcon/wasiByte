import React from 'react'
import 'tailwindcss/tailwind.css'
import style from './CourseCard.module.scss'
import Button from '@/components/Button/Button'
const CourseCard = ({
  imageSrc = '',
  title = '',
  desc = '',
  link = '',
  id = 0
}) => {
  return (
    <>
      <div className={style.container}>
        <article className={style.container_card}>
          <img
            className={style.container_card_image}
            src={imageSrc}
            alt="Woman's Face"
          />
          <div className={style.container_card_mid}>
            <h3 className={style.container_card_title}>{title}</h3>
            <p className={style.container_card_text}>{desc}</p>
            <div className={style.container_card_bot}>
              <p>25 ptos</p>
              <Button href={`/games/course/${id}`} text='Ver Detalle' />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default CourseCard
