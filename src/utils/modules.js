import dashboardIcon from '../../public/icons/dashboardIcon.svg'
import coursesIcon from '../../public/icons/coursesIcon.svg'
import futureIcon from '../../public/icons/futureIcon.svg'
import productsIcon from '../../public/icons/productsIcon.svg'
import recommendsIcon from '../..//public/icons/recommendsIcon.svg'
import closeIcon from '../../public/icons/closeIcon.svg'

export const modules = [
    {
      name: 'Salud Financiera',
      link: '/salud',
      iconSrc: dashboardIcon
    },
    {
      name: 'Mis Productos',
      link: '/productos',
      iconSrc: productsIcon
    },
    {
      name: 'Ver mi futuro',
      link: '/futuro',
      iconSrc: futureIcon
    },
    {
      name: 'Recomedaciones para ti',
      link: '/recomendaciones',
      iconSrc: recommendsIcon
    },
    {
      name: 'Jugando con el cuy',
      link: '/games',
      iconSrc: dashboardIcon
    },
    // {
    //   name: 'Calculadora',
    //   link: '/calculadora',
    //   iconSrc: dashboardIcon
    // },
    {
      name: 'Cerrar Sesión',
      link: '/cerrar-sesion',
      iconSrc: closeIcon
    }
  ]