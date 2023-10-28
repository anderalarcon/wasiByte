import React from 'react'
import TopBar from '../TopBar/TopBar'
import styles from './Games.module.scss'
import Slogan from './childrens/Slogan/Slogan'
import Courses from './childrens/Courses/Courses'
const Games = () => {
  return (
    <div className={styles.games}>
      <TopBar />
      <div className={styles.games_top}>
        <Slogan />
        <Courses/>
      </div>
    </div>
  )
}

export default Games
