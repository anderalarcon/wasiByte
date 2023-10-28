import React from 'react'
import styles from './Dashboard.module.scss'
import TopBar from '../TopBar/TopBar'
import IncomeExpenseChart from './childrens/IncomeExpenseChart/IncomeExpenseChart'

import IncomesExpenses from './childrens/IncomesExpenses/IncomeExpenses'
import CardDasboard from './childrens/CardDashboard/CardDasboard'
import benefitsCuy from '../../../public/images/benefitsCuy.png'
import futureCuy from '../../../public/images/futureCuy.png'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar />
      <div className={styles.dashboard_ctn}>
        <div className={styles.dashboard_top}>
          <IncomesExpenses />
          <IncomeExpenseChart />
        </div>
        <div className={styles.dashboard_bot}>
          <CardDasboard
            title={'¡Gana beneficios jugando con el Cuy!'}
            desc='Conviértete en un experto en los productos del BCP y gana beneficios'
            cta='Entérate aquí'
            link='/games'
            imageSrc={benefitsCuy.src}
          />
          <CardDasboard
            title={'¡Averigua tu futuro con el Cuy!'}
            desc='Visualiza cómo sería tu futuro con los productos del BCP'
            cta='Entérate aquí'
            link='/futuro'
            imageSrc={futureCuy.src}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
