import React from 'react'
import styles from './Dashboard.module.scss'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_top}>
        <p>ingresos y gastos</p>
        <p>dashboard grafico</p>
      </div>
      <div className={styles.dashboard_bot}>
        <p>cuy</p>
        <p>otro coso</p>
      </div>
    </div>
  )
}

export default Dashboard
