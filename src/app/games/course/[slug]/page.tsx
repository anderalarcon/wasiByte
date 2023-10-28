import NavBar from '@/components/NavBar/NavBar'
import styles from './detailPage.module.scss'
import Image from 'next/image'
import detailsPageDefault from '../../../../../public/images/detailsPageDefault.png'
import { coursesModules } from '../../../../utils/coursesModules'
import Button from '@/components/Button/Button'
const DetailPage = ({ params = {} }) => {
  const getCoursesModules = () => {
    return coursesModules.map((courseModule, i) => {
      return (
        <div
          className={styles.detailPage_bot_module}
          key={courseModule.title + i}
        >
          <p className={styles.detailPage_bot_module_title}>
            {courseModule.title}
          </p>
          <p className={styles.detailPage_bot_module_subtitle}>
            {courseModule.subtitle}
          </p>
        </div>
      )
    })
  }
  return (
    <div className={styles.detailPage}>
      <NavBar
        setIsOpen={() => {}}
        showToggle={false}
        showInDesktop={true}
        isOpen={false}
      />
      <div className={styles.detailPage_ctn}>
        <div className={styles.detailPage_top}>
          <Image
            className={styles.detailPage_top_img}
            src={detailsPageDefault.src}
            width={500}
            height={500}
            alt='details page'
          />
          <div className={styles.detailPage_top_text}>
            <p className={styles.detailPage_top_text_title}>
              Presupuesto y ahorro
            </p>
            <p className={styles.detailPage_top_text_desc}>
              Aprende de forma entretenida y GRATUITA con este curso y ¡Obtén un
              certificado digital al instante!
            </p>
          </div>
        </div>
        <div className={styles.detailPage_bot}>{getCoursesModules()}</div>
        <div className={styles.detailPage_buttons}>
          <Button href='' text='Empezar el curso' />
          <Button href={`/games/course/${params.slug}/quiz/${params.slug}`} text='Hacer quiz' />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
