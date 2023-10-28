import React from 'react'
import defaultImage from '../../../../../public/images/productos.png'
import style from './CardProduct.module.scss';
import { IProduct } from '../../Productos';
const CardProduct = (props:{product: IProduct}) => {
    const product  = props.product;
    return (
        <>
            <div className={style.container}>
                <article className={style.container_card}>
                    <img className={style.container_card_image} src={defaultImage.src} alt="Woman's Face" />
                    <section>
                        <h3 className={style.container_card_title}>{product.title}</h3>
                        <div className={style.container_card_content}>
                            <div>
                                <p className={style.container_card_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
                                    quaerat sit?</p>
                            </div>

                            <div className={style.container_card_content_service}>
                                <p>Descubre por que Aqui! </p>
                                <button>Optenla aqui!</button>
                            </div>

                        </div>
                    </section>

                </article>
            </div>
        </>

    )
}

export default CardProduct