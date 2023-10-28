import React from 'react'
import styles from './LoginForm.module.scss'
import Input from './childrens/Input'
const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.form_title}>Organízate con el BCP</h2>
      <Input placeholder='Nro de documetno' type='dni' />
      <Input tooltipText='Número de tarjeta' />
      <Input type='checkbox' />
      <Input tooltipText='Clave de internet de 6 dígitos' />
      <Input placeholder='Código' type='captcha' tooltipText='Clave de internet de 6 dígitos' />
      <button className={styles.form_btn}>Continuar</button>
    </form>
  )
}

export default LoginForm
