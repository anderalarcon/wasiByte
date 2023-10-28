import React from 'react'
import styles from './IncomeExpenseCard.module.scss'
const IncomeExpenseCard = ({ title = '', month = '', amount = 0 }) => {
  return (
    <div className={styles.incomeexpensecard}>
      <div className={styles.incomeexpensecard_left}>
        <p>{title}</p>
        <p>{month}</p>
      </div>
      <p className={styles.incomeexpensecard_amount}>S/{amount}</p>
    </div>
  )
}

export default IncomeExpenseCard
