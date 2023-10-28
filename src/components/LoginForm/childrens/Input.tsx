import React from 'react'
import styles from './Input.module.scss'
import Image from 'next/image'
import captchImg from '../../../../public/images/captcha.jpeg'
const Input = ({ tooltipText = '', type = 'default', placeholder = '' }) => {
  if (type === 'default') {
    return (
      <div className={styles.inputCtn}>
        <p className={styles.inputCtn_tooltip}>{tooltipText}</p>
        <input className={styles.inputCtn_input} type='text' />
      </div>
    )
  } else if (type === 'dni') {
    return (
      <div className={styles.dniInputCtn}>
        <select className={styles.dniInputCtn_select} name='' id=''>
          <option value=''>DNI</option>
        </select>
        <input
          placeholder={placeholder}
          className={styles.dniInputCtn_input}
          type='text'
        />
      </div>
    )
  } else if (type === 'checkbox') {
    return (
      <div className={styles.checkboxInputCtn}>
        <input className={styles.checkboxInputCtn_input} type='checkbox' />
        <p>Recordar datos</p>
      </div>
    )
  } else if (type === 'captcha') {
    return (
      <div className={styles.captchaInputCtn}>
        <div className={styles.captchaInputCtn_img}>
          <Image alt='captcha' src={captchImg.src} width={100} height={30} />
        </div>
        <input
          placeholder={placeholder}
          className={styles.captchaInputCtn_input}
          type='text'
        />
      </div>
    )
  }
}

export default Input
