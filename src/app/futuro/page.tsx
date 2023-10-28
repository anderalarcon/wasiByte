'use client'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import styles from './future.module.scss'
import CuyChat from '@/components/Futuro/CuyChat'
import TopBar from '@/components/TopBar/TopBar'

const FuturePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.page}>
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.page_right}>
        <Sidebar isOpen={isOpen} />
        <div className={styles.main}>
          <TopBar />
          <CuyChat />
        </div>
      </div>
    </div>
  )
}

export default FuturePage
