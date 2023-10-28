'use client'
import Image from 'next/image'
import React from 'react'
import logoBcp from '../../../public/icons/logoBcp.svg'
import styles from './Login.module.scss'
import leftArrow from '../../../public/images/leftArrow.png'
import question from '../../../public/images/question.png'
import clock from '../../../public/icons/clock.svg'
import useCountdown from '@/hooks/useCountdown'
import LoginForm from '../LoginForm/LoginForm'

const Login = () => {
  const timeLeft = useCountdown(120)

  const getRightNavbar = () => {
    return (
      <div className={styles.login_right_navbar}>
        <Image alt='Logo BCP' src={logoBcp.src} width={83} height={22} />
        <div className={styles.login_right_navbar_countdown}>
          <span className={styles.login_right_navbar_countdown_upTablet}>
            Esta ventana se
          </span>
          <span className={styles.login_right_navbar_countdown_upTablet_bold}>
            cerrará
          </span>
          <span className={styles.login_right_navbar_countdown_upTablet}>
            en
          </span>
          <span className={styles.login_right_navbar_countdown_special}>
            {timeLeft}
          </span>
          <span className={styles.login_right_navbar_countdown_mobile}>
            segundos
          </span>
          <Image alt='Logo BCP' src={clock.src} width={24} height={24} />
        </div>
      </div>
    )
  }

  const getGoBack = () => {
    return (
      <div className={styles.login_right_goback}>
        <div className={styles.login_right_goback_text}>
          <Image alt='Logo BCP' src={leftArrow.src} width={24} height={24} />
          <p>Volver</p>
        </div>
        <Image alt='Logo BCP' src={question.src} width={24} height={24} />
      </div>
    )
  }
  return (
    <section className={styles.login}>
      <div className={styles.login_left}></div>
      <div className={styles.login_right}>
        {getRightNavbar()}
        {getGoBack()}
        <LoginForm />
      </div>
    </section>
  )
}

export default Login
