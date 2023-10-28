import React from 'react'
import style from './CardDasboard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const CardDasboard = ({
  title = '',
  desc = '',
  link = '',
  cta = '',
  imageSrc = ''
}) => {
  return (
    <>
      <div className={style.container}>
        <article className={style.container_card}>
          <Image
            className={style.container_card_image}
            src={imageSrc}
            alt='Cuy working'
            width={150}
            height={150}
          />
          <section>
            <h3 className={style.container_card_title}>{title}</h3>
            <p className={style.container_card_text}>{desc}</p>
            <div className={style.container_card_footer}>
              <Link href={link} className={style.container_card_button}>
                {cta}
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}

export default CardDasboard
