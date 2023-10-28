import React from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import CursosIcon from '../../../public/icons/CursosIcon'
import dashboardIcon from '../../../public/icons/dashboardIcon.svg'
import Link from 'next/link'
const Sidebar = () => {
  const modules = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      iconSrc: dashboardIcon
    },
    {
      name: 'Cursos',
      link: '/cursos',
      iconSrc: dashboardIcon
    },
    {
      name: 'Mis Productos',
      link: '/productos',
      iconSrc: dashboardIcon
    },
    {
      name: 'Ver mi futuro',
      link: '/futuro',
      iconSrc: dashboardIcon
    },
    {
      name: 'Recomedaciones para ti',
      link: '/futuro',
      iconSrc: dashboardIcon
    },
    {
      name: 'Beneficios para ti',
      link: '/futuro',
      iconSrc: dashboardIcon
    },
    {
      name: 'Calculadora',
      link: '/futuro',
      iconSrc: dashboardIcon
    },
    {
      name: 'Cerrar Sesión',
      link: '/futuro',
      iconSrc: dashboardIcon
    }
  ]

  const getModules = () => {
    return modules.map((module) => {
      return (
        <div className={styles.sidebar_tab} key={module.name}>
          <Image alt='icon' src={module.iconSrc}></Image>
          <Link href={module.link} className={styles.sidebar_tab_name}>
            {module.name}
          </Link>
        </div>
      )
    })
  }
  return (
    <div className={styles.sidebar}>
      <h1>Educate jugando</h1>
      {getModules()}
    </div>
  )
}

export default Sidebar
