import React from 'react'
import toggleIcon from '../../../public/icons/toggleIcon.svg'
import Image from 'next/image'
import styles from './NavBar.module.scss'
interface NavBarProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }

const NavBar = ({ setIsOpen , isOpen = false }: NavBarProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.navbar}>
      <p className={styles.navbar_title}>Educate con el BCP</p>
      <Image
        onClick={toggleSidebar}
        className={styles.navbar_toggle}
        alt={'toggle icon'}
        src={toggleIcon.src}
        width={20}
        height={20}
      ></Image>
    </div>
  )
}

export default NavBar
