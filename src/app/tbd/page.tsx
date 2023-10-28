import Image from 'next/image'
import React from 'react'
import tbd from '../../../public/images/tbd.jpg'
const TbdPage = () => {
  return (
    <Image
      alt='tbd'
      src={tbd.src}
      width={'500'}
      height={'500'}
      style={{ width: '100%', height: '100vh' }}
    />
  )
}

export default TbdPage
