'use client'
import React, { useState } from 'react'
import styles from '../salud/healthPage.module.scss'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/Sidebar/Sidebar'
import Productos from '@/components/Productos/Productos'

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dashboardPage}>
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.dashboardPage_right}>
        <Sidebar isOpen={isOpen} />
        <Productos />
      </div>
    </div>
  )
}

export default ProductsPage
