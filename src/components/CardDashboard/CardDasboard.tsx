import React from 'react'
import defaultImage from '../../../public/images/cuyLaptop.png'
import 'tailwindcss/tailwind.css';
import style from './CardDasboard.module.scss';
const CardDasboard = () => {
  return (
    <>
      <div className={style.container}>
        <article className={style.container_card}>
          <img className={style.container_card_image} src={defaultImage.src} alt="Cuy working" />
          <section>
            <h3 className={style.container_card_title}>Gana beneficios jugando con el guy!</h3>
            <p className={style.container_card_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
              quaerat sit?</p>
            <div className={style.container_card_footer}>
              <button className={style.container_card_button}>Enterate aqui!</button>
            </div>
          </section>
        </article>
      </div>
    </>

  )
}

export default CardDasboard