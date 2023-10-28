import dashboardIcon from '../../public/icons/dashboardIcon.svg'
import coursesIcon from '../../public/icons/coursesIcon.svg'
import futureIcon from '../../public/icons/futureIcon.svg'
import productsIcon from '../../public/icons/productsIcon.svg'
import recommendsIcon from '../..//public/icons/recommendsIcon.svg'
import closeIcon from '../../public/icons/closeIcon.svg'

export const modules = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      iconSrc: dashboardIcon
    },
    {
      name: 'Cursos',
      link: '/cursos',
      iconSrc: coursesIcon
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
      name: 'Beneficios para ti',
      link: '/beneficios',
      iconSrc: dashboardIcon
    },
    {
      name: 'Calculadora',
      link: '/calculadora',
      iconSrc: dashboardIcon
    },
    {
      name: 'Cerrar Sesión',
      link: '/cerrar-sesion',
      iconSrc: closeIcon
    }
  ]