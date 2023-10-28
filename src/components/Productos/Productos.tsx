import React from 'react'
import 'tailwindcss/tailwind.css';
import CardProduct from './childrens/CardProduct/CardProduct';
import style from './Productos.module.scss';
export interface IProduct{
    description: string;
    title:string;
    url:string;
}
const Productos = () => {
   
    const listProducts:IProduct[] = [
        {
            title:'Presupuesto y ahorro',
            description:'lorem ipsum dolor sit amet, consectetur',
            url:'card'
        },
        {
            title:'Presupuesto y ahorro',
            description:'lorem ipsum dolor sit amet, consectetur',
            url:'card'
        },
    ]
    const elementos = listProducts.map((product, index) => (
        <CardProduct key={index} product={product}></CardProduct>
      ));

    return (

        <>
            <div className={style.content}>
                <p className={style.content_title}>Productos Recomendados para ti</p>
                <article className={style.content_main}>
                    <button>
                        Todos
                    </button>
                    <button>
                        Cuentas
                    </button>
                    <button>
                        Tarjetas
                    </button>
                    <button>
                        Seguros
                    </button>
                </article>
                {elementos}

                {/* <CardProduct ></CardProduct> */}
              

            </div>
        </>

    )
}

export default Productos;