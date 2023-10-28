'use client'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import styles from '../salud/healthPage.module.scss'
import Games from '@/components/Games/Games'
const GamesPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dashboardPage}>
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.dashboardPage_right}>
        <Sidebar isOpen={isOpen} />
        <Games/>
      </div>
    </div>
  )
}

export default GamesPage
