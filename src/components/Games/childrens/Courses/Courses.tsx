import React from 'react'
import styles from './Courses.module.scss'
import CourseCard from '../CourseCard/CourseCard'
import { courses } from '../../../../utils/courses'
import sponsorIcon from '../../../../../public/icons/sponsorIcon.svg'
import Image from 'next/image'
const Courses = () => {
  const getCourses = () => {
    return courses?.map((course) => {
      return (
        <CourseCard
          key={course.title}
          imageSrc={course.imageSrc}
          title={course.title}
          desc={course.description}
        />
      )
    })
  }
  return (
    <div className={styles.courses}>
      <div className={styles.courses_top}>
        <p className={styles.courses_top_title}>Cursos de finanzas Personales I</p>
        <div className={styles.courses_top_sponsor}>
          <p>Auspiciado por</p>
          <Image src={sponsorIcon.src} width={100} height={100} alt='sponsor'/>
        </div>
      </div>
      <div className={styles.courses_list}>{getCourses()}</div>
    </div>
  )
}

export default Courses
