import React from 'react'
import toggleIcon from '../../../public/icons/toggleIcon.svg'
import Image from 'next/image'
import styles from './NavBar.module.scss'
interface NavBarProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  showToggle?: boolean
  showInDesktop?: boolean
}

const NavBar = ({
  setIsOpen = () => {},
  isOpen = false,
  showToggle = true,
  showInDesktop = false
}: NavBarProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const getToggleImage = () => {
    if (showToggle) {
      return (
        <Image
          onClick={toggleSidebar}
          className={styles.navbar_toggle}
          alt={'toggle icon'}
          src={toggleIcon.src}
          width={20}
          height={20}
        ></Image>
      )
    }
    return null
  }

  const getHideClass = () => {
    if (!showInDesktop) {
      return styles.hide
    }
    return ''
  }
  return (
    <div className={`${styles.navbar} ${getHideClass()}`}>
      <p className={styles.navbar_title}>Educate con el BCP</p>
      {getToggleImage()}
    </div>
  )
}

export default NavBar
