import React from 'react'
import styles from './Dashboard.module.scss'
import TopBar from '../TopBar/TopBar'
import IncomeExpenseChart from './childrens/IncomeExpenseChart/IncomeExpenseChart'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar/>
      <div className={styles.dashboard_top}>
        <div>ingresos y gastos</div>
        <IncomeExpenseChart />
      </div>
      <div className={styles.dashboard_bot}>
        <div>cuy</div>
        <div>otro coso</div>
      </div>
    </div>
  )
}

export default Dashboard
