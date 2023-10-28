import React from 'react'
import imageViaje from '../../../../../public/images/product-viaje.png'
import imagePremiun from '../../../../../public/images/product-premiun.png'
import imagePlatiniun from '../../../../../public/images/product-platiniun.png'
import style from './CardProduct.module.scss'
import { IProduct } from '../../Productos'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const productImagen = {
  seguros: imageViaje,
  cuentas: imagePremiun,
  tarjetas: imagePlatiniun
}
const CardProduct = (props: { product: IProduct }) => {
  const product = props.product
  const abc = productImagen[product.type]
  return (
    <>
      <div className={style.container}>
        <article className={style.container_card}>
          <div className={style.container_card_ctn}>
            <Image
              className={style.container_card_image}
              src={productImagen[product.type].src}
              alt='Wo'
              width={160}
              height={100}
            />
          </div>

          <section>
            <h3 className={style.container_card_title}>{product.title}</h3>
            <div className={style.container_card_content}>
              <div className={style.container_card_content_ctn}>
                <p className={style.container_card_text}>
                  {product.description}
                </p>
              </div>

              <div className={style.container_card_content_service}>
                <p>Descubre aqui -{'>'} </p>
                <Button href='/games' text='Obtenla aquí' />
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}

export default CardProduct
