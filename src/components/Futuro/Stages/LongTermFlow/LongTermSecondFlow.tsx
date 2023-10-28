import React from 'react'
import FuturePlanChart from '../../FuturePlanChart'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'
import styles from './LongTermSecondFlow.module.scss'
const LongTermSecondFlow = () => {
    return (
        <div className={`p-5 bg-[#EBF4FF] h-full rounded-xl w-full flex flex-col space-y-2 ${styles.secondflow}`}>
            <div className='flex flex-col md:flex-row-reverse items-center space-y-5 md:space-y-0 space-x-5'>
                <div className='flex flex-col items-center space-y-4 md:w-3/4 md:px-4'>
                    <Card className='w-full'>
                        <FuturePlanChart />
                    </Card>
                </div>
                <Card className='w-full md:w-1/4 md:h-full p-2 flex md:flex-col md:py-8 items-center space-x-2 md:space-y-4'>
                    <div className='w-20 h-20 rounded-3xl'>
                        <Image
                            className='h-full rounded-3xl'
                            src='/images/cuy-oraculo.png'
                            alt='Cuy magico oraculo'
                            width={140}
                            height={140}
                        />
                    </div>
                    <div className='flex flex-col items-center md:py-4'>
                        <h1 className='text-lg font-bold md:text-center leading-none'>Plan para obtener el auto de mis sueños</h1>
                        <p className='text-sm md:text-center my-2 md:my-4'>Deposita durante 24 meses tu inicial propuesta de{' '}
                            <span className='font-bold text-[#FF7800]'>$ 30k</span>
                        </p>
                        <p className='text-sm font-extralight md:text-center'>Tendrás acceso al crédito Audi con la siguiente cuota:</p>
                        <p className='font-bold text-[#0030B3] text-lg'>$ 1,250.00</p>
                        <Button
                            className='bg-[#0030B3] rounded-2xl mt-4'
                        >
                            Accede al plan formativo aquí
                        </Button>
                    </div>
                </Card>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between items-center w-full space-y-2'>
                <p className='text-[#FF7800] font-bold cursor-pointer md:w-2/6 md:p-4'>
                    <Checkbox className='mr-2'/>
                    Lea y acepte los <span className='text-[#0030B3]'>términos y condiciones</span>
                </p>
                <Button
                    className='bg-[#FF7800] w-full rounded-2xl md:w-4/6'
                >
                    Solicitar
                </Button>
            </div>
        </div>
    )
}

export default LongTermSecondFlow