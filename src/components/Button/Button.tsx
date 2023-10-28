import Link from 'next/link'
import React from 'react'
import styles from './Button.module.scss'
const Button = ({ href = '', text = '' }) => {
  return (
    <Link className={styles.button} href={href}>
      {text}
    </Link>
  )
}

export default Button
