import React from 'react'
import defaultImage from '../../../../../public/images/productos.png'
import imageViaje from '../../../../../public/images/product-viaje.png'
import imagePremiun from '../../../../../public/images/product-premiun.png'
import imagePlatiniun from '../../../../../public/images/product-platiniun.png'
import style from './CardProduct.module.scss';
import { IProduct } from '../../Productos';


const productImagen ={
    "seguros" : imageViaje,
    "cuentas" : imagePremiun,
    "tarjetas" : imagePlatiniun
}
const CardProduct = (props:{product: IProduct}) => {
    const product  = props.product;
    const  abc = productImagen[product.type];
    return (
        <>
            <div className={style.container}>
                <article className={style.container_card}>
                    {/* <section> */}
                    <img className={style.container_card_image} src={productImagen[product.type].src} alt="Wo" />

                    {/* </section> */}
                    <section>
                        <h3 className={style.container_card_title}>{product.title}</h3>
                        <div className={style.container_card_content}>
                            <div>
                                <p className={style.container_card_text}>
                                    {product.description}
                                </p>
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