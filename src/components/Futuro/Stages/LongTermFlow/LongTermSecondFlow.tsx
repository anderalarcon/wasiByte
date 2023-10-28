import React from 'react'
import FuturePlanChart from '../../FuturePlanChart'
import { Card } from '@/components/ui/card'

const LongTermSecondFlow = () => {
    return (
        <div className='p-5 bg-[#EBF4FF] h-full rounded-xl w-full flex flex-col md:flex-row items-center space-y-5 md:space-y-0 space-x-5'>
            <Card>
                <FuturePlanChart />
            </Card>
        </div>
    )
}

export default LongTermSecondFlow