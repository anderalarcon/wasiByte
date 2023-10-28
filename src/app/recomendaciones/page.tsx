'use client'
import Dashboard from '@/components/Dashboard/Dashboard'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import styles from '../salud/healthPage.module.scss'

const RecommendsPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dashboardPage}>
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.dashboardPage_right}>
        <Sidebar isOpen={isOpen} />
        <Dashboard />
      </div>
    </div>
  )
}

export default RecommendsPage
