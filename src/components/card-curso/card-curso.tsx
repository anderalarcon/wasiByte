import React from 'react'
import defaultImage from '../../../public/images/default.jpeg'
import 'tailwindcss/tailwind.css';
import style from './card-curso.module.scss';
const CardCurso = () => {
  return (
    <>
      <div className={style.container}>
        <article className={style.container_card}>
          <img className={style.container_card_image} src={defaultImage.src} alt="Woman's Face" />
          <section>
            <h3 className={style.container_card_title}>Presupuesto y ahorro</h3>
            <p className={style.container_card_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
              quaerat sit?</p>
          </section>
        </article>
      </div>
    </>

  )
}

export default CardCurso