import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'
import styles from './dashboard.module.scss'
import CardCurso from '@/components/card-curso/card-curso'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <Sidebar/>
        <div>Derecha</div>
        <CardCurso/>

    </div>
  )
}

export default Dashboard