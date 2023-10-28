import React, { useEffect, useState } from 'react'
import styles from './QuizModal.module.scss'
import Button from '@/components/Button/Button'
import quizModal from '../../../../../public/images/quizModal.png'
import Image from 'next/image'
const QuizModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const getTransition = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 2000)
  }

  useEffect(() => {
    getTransition()
  }, [])

  return (
    <div className={`${styles.quizmodal} ${isVisible ? styles.quizmodal_active : ''}`}>
      <div className={styles.quizmodal_top}>
        <Image src={quizModal.src} width={100} height={100} alt='modal' />
        <p>¿Te interesaría ahorrar más?</p>
      </div>
      <p className={styles.quizmodal_mid}>
        Porque nos preocupamos por conseguir tus objetivos de ahorro, en el BCP
        te ofrecemos abrir una cuenta premio para que puedas ahorrar y ganar a
        la misma vez y a solo S/. 10.00 al mes
      </p>
      <div className={styles.quizmodal_bot}>
        <Button href='https://www.viabcp.com/cuentas/cuenta-ahorro/cuenta-premio-bcp?rfid=header:productos:cuenta-premio:cuentas' text='Me interesa' />
      </div>
    </div>
  )
}

export default QuizModal
