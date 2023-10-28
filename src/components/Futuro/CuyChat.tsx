'use client'

import Image from 'next/image'
import ChatFirstStage from './Stages/ChatFirstStage'
import { useState } from 'react'
import { StagesProps } from './Stages/types'
import ChatSecondStage from './Stages/ChatSecondStage'
import { Loader2 } from 'lucide-react'
import ShortTermFirstFlow from './Stages/ShortTermFlow/ShortTermFirstFlow'

const stages = [
  ChatFirstStage,
  ChatSecondStage
]

const firstFlow = [
  ShortTermFirstFlow
]

const secondFlow = [
  ShortTermFirstFlow
]

const CuyChat = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [loading, setLoading] = useState(false);
  const [flow, setFlow] = useState("")

  const CurrentStage = flow === "FIRST" ? firstFlow[currentStageIndex]
    : flow === "SECOND" ? secondFlow[currentStageIndex] : stages[currentStageIndex];

  const onStageSubmit = () => {
    const nextStageIndex = currentStageIndex + 1;
    setLoading(true);
    setTimeout(() => setLoading(false), 1000)
    if (flow === "FIRST") {
      if (nextStageIndex <= firstFlow.length - 1) setCurrentStageIndex(currentStageIndex + 1)
    } else if (flow === "SECOND") {
      if (nextStageIndex <= secondFlow.length - 1) setCurrentStageIndex(currentStageIndex + 1)
    } else {
      if (nextStageIndex <= stages.length - 1) setCurrentStageIndex(currentStageIndex + 1)
    }
  }

  const onFlowTriggerSubmit = (flow: string) => {
    setFlow(flow)
    setLoading(true);
    setTimeout(() => setLoading(false), 1000)
    setCurrentStageIndex(0)
  }

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
        {
          loading ?
            <Loader2 className="h-4 w-4 animate-spin text-white text-xl" />
            :
            <CurrentStage onSubmit={onStageSubmit} onFlowTriggerSubmit={onFlowTriggerSubmit} />
        }
      </div>
    </div>
  )
}

export default CuyChat