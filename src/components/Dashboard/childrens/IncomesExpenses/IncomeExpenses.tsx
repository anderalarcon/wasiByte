import React from 'react'
import RecommendCard from '../RecommendCard/RecommendCard'
import styles from './IncomesExpenses.module.scss'
import IncomeExpenseCard from '../IncomeExpenseCard/IncomeExpenseCard'
const IncomeExpenses = () => {
  return (
    <div className={styles.incomesexpenses}>
      <h2 className={styles.incomesexpenses_title}>Ingresos y Gastos</h2>
      <div className={styles.incomesexpenses_cards}>
        <IncomeExpenseCard
          title={'Ingresos'}
          month={'Octubre'}
          amount={3100}
        />
        <IncomeExpenseCard
          title={'Gastos'}
          month={'Octubre'}
          amount={3800}
        />
      </div>
      <RecommendCard />
    </div>
  )
}

export default IncomeExpenses
