import React from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const CuyChat = () => {
  return (
    <div className='p-5 bg-[#EBF4FF] h-full rounded-xl w-full flex flex-col md:flex-row items-center space-y-5 md:space-y-0 space-x-5'>
      <div className='h-3/4 aspect-[3/4] md:h-full rounded-3xl'>
        <Image
          className='h-full rounded-3xl'
          src='/images/cuy-oraculo.png'
          alt='Cuy magico oraculo'
          width={500}
          height={600}
        />
      </div>
      <div
        className={`
          w-full
          h-1/4
          md:h-full
          rounded-2xl
          p-10
          bg-[#FF7800]
          flex
          flex-col
          items-center
          justify-center
          md:space-y-4
        `
        }
      >
        <div className='text-white font-bold md:text-2xl'>Dile al Cuy mágico cuál es tu deseo</div>
        <Input
          type='text'
          placeholder='Pide tu deseo aqui'
        />
        <div className='w-[50%]'>
          <Button className='bg-[#0030B3] w-full rounded-2xl'>
            Pedir
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CuyChat