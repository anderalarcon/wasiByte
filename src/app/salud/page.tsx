"use client"

import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import styles from './healthPage.module.scss'
import NavBar from '@/components/NavBar/NavBar'
import Dashboard from '@/components/Dashboard/Dashboard'
const HealthPage = () => {
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

export default HealthPage
