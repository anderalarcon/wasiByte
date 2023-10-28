import { Loader2 } from 'lucide-react'
import React from 'react'
import { StagesProps } from '../types'
import styles from './LongTermFirstFlow.module.scss'
import Image from 'next/image'
import currencyIcon from '../../../../../public/icons/currencyIcon.svg'
const LongTermFirstFlow = ({ onSubmit, loading }: StagesProps) => {
  return (
    <div className={styles.longterm}>
      <p className={styles.longterm_title}>
        Simula el crédito del auto de tus sueños:
      </p>
      <div className={styles.longterm_form}>
        <div className={styles.longterm_form_top}>
          <label className={styles.longterm_titles}>
            Tipo de moneda de tu cuota inicial
          </label>
          <Image src={currencyIcon.src} width={100} height={100} alt='currency Icon'/>
        </div>
        <div className={styles.longterm_form_mid}>
          <label className={styles.longterm_titles}>
            ¿Cuál es el costo del vehículo?
          </label>
          <input
            placeholder='Costo del vehiculo'
            className={styles.longterm_form_mid_input}
            type='number'
          />
        </div>
        <div className={styles.longterm_form_bot}>
          <div className={styles.longterm_form_bot_credit}>
            <p className={styles.longterm_form_bot_credit_text}>
              Plazo de crédito
            </p>
            <div className={styles.longterm_form_bot_credit_bar}>
              <p className={styles.longterm_form_bot_credit_bar_text}>
                24 meses
              </p>
              <div className={styles.longterm_form_bot_credit_bar_line}>
                <div
                  className={styles.longterm_form_bot_credit_bar_line_inside}
                ></div>
              </div>
              <div className={styles.longterm_form_bot_credit_bar_labels}>
                <p>12 meses</p>
                <p>72 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.longterm_button} >
        <button
          text='Planificar mi deseo'
          href=''
          className=''
          disabled={loading}
          onClick={onSubmit}
        >
          {loading ? <Loader2 className='' /> : 'Planificar mi deseo'}
        </button>
      </div>
    </div>
  )
}

export default LongTermFirstFlow
