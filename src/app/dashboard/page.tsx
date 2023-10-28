import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'
import styles from './dashboard.module.scss'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <Sidebar/>
        <div>Derecha</div>
    </div>
  )
}

export default Dashboard