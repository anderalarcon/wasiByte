'use client'
import React from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import { modules } from '../../utils/modules'
import Link from 'next/link'
import logo from '../../../public/icons/logo.svg'
const Sidebar = ({ isOpen = false }) => {
  const getModules = () => {
    return modules.map((module) => {
      return (
        <Link
          href={module.link}
          className={styles.sidebar_tab}
          key={module.name}
        >
          <Image alt='icon' src={module?.iconSrc}></Image>
          <p className={styles.sidebar_tab_name}>{module.name}</p>
        </Link>
      )
    })
  }

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.sidebar_open : ''}`}>
      <Image
        alt='icon'
        src={logo.src}
        width={100}
        height={100}
        className={styles.sidebar_header}
      ></Image>
      {getModules()}
    </div>
  )
}

export default Sidebar
