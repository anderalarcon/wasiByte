import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import CardProduct from './childrens/CardProduct/CardProduct'
import style from './Productos.module.scss'
import TopBar from '../TopBar/TopBar'

export interface IProduct {
  description: string
  title: string
  url: string
  type: 'seguros' | 'tarjetas' | 'cuentas'
}
interface BotonesSombreadosState {
  boton1: boolean
  boton2: boolean
  boton3: boolean
  boton4: boolean
}
const mock: IProduct[] = [
  {
    title: 'Visa Platimun LATAM Pass',
    description:
      'Te recomendamos la Visa Platinum LATAM Pass debido al uso reciente y beneficioso de millas en tus viajes. Descubre por qué es la mejor opción para ti.',
    url: 'card',
    type: 'tarjetas'
  },
  {
    title: 'Cuenta Premio',
    description:
      'Te recomendamos la Cuenta Premio por tu saldo alto en ahorros. Descubre por qué es la mejor de todas las opciones.',
    url: 'card',
    type: 'cuentas'
  },
  {
    title: 'Seguro de viaje',
    description:
      'Te recomendamos el Seguro de Viajes debido al uso reciente y beneficioso de millas en tus viajes. Descubre por qué es la mejor opción para ti.',
    url: 'gift',
    type: 'seguros'
  }
]
const Productos = () => {
  const reset = {
    boton1: false,
    boton2: false,
    boton3: false,
    boton4: false
  }
  const [botonesSombreados, setBotonesSombreados] = useState({
    boton1: false,
    boton2: false,
    boton3: false,
    boton4: false
  })
  const toggleSombreado = (nombre: keyof BotonesSombreadosState) => {
    let selectBoton = {} as BotonesSombreadosState
    setBotonesSombreados((prevState) => {
      const data = {
        ...reset,
        [nombre]: prevState[nombre] ? prevState[nombre] : !prevState[nombre]
      }
      selectBoton = data
      return data
    })

    setlistProducts((prevlistProduct) => {
      if (selectBoton.boton2)
        return mock.filter((product) => product.type == 'cuentas')
      if (selectBoton.boton3)
        return mock.filter((product) => product.type == 'tarjetas')
      if (selectBoton.boton4)
        return mock.filter((product) => product.type == 'seguros')
      return [...mock]
    })
  }

  const [listProducts, setlistProducts] = useState(mock)

  const elementos = listProducts.map((product, index) => (
    <CardProduct key={index} product={product}></CardProduct>
  ))

  return (
    <div className={style.products}>
      <TopBar />
      <div className={style.content}>
        <p className={style.content_title}>Productos Recomendados para ti</p>
        <article className={style.content_main}>
          <button
            className={`${botonesSombreados.boton1 ? style.sombreado : ''}`}
            onClick={() => toggleSombreado('boton1')}
          >
            Todos
          </button>
          <button
            className={`${botonesSombreados.boton2 ? style.sombreado : ''}`}
            onClick={() => toggleSombreado('boton2')}
          >
            Cuentas
          </button>
          <button
            className={`${botonesSombreados.boton3 ? style.sombreado : ''}`}
            onClick={() => toggleSombreado('boton3')}
          >
            Tarjetas
          </button>
          <button
            className={`${botonesSombreados.boton4 ? style.sombreado : ''}`}
            onClick={() => toggleSombreado('boton4')}
          >
            Seguros
          </button>
        </article>
        {elementos}

        {/* <CardProduct ></CardProduct> */}
      </div>
    </div>
  )
}

export default Productos
