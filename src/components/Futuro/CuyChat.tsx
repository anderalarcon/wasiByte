'use client'

import Image from 'next/image'
import ChatFirstStage from './Stages/ChatFirstStage'
import { useState } from 'react'
import { StagesProps } from './Stages/types'
import ChatSecondStage from './Stages/ChatSecondStage'
import { Loader2 } from 'lucide-react'
import ShortTermFirstFlow from './Stages/ShortTermFlow/ShortTermFirstFlow'
import LongTermFirstFlow from './Stages/LongTermFlow/LongTermFirstFlow'
import LongTermSecondFlow from './Stages/LongTermFlow/LongTermSecondFlow'

const stages = [
  ChatFirstStage,
  ChatSecondStage
]

const firstFlow = [
  ShortTermFirstFlow
]

const secondFlow = [
  LongTermFirstFlow,
  LongTermSecondFlow
]

const CuyChat = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [loading, setLoading] = useState(false);
  const [flow, setFlow] = useState("")

  const onStageSubmit = () => {
    const nextStageIndex = currentStageIndex + 1;
    setLoading(true);
    setTimeout(() => setLoading(false), 1000)
    setTimeout(() => {
      if (flow === "FIRST") {
        if (nextStageIndex <= firstFlow.length - 1) setCurrentStageIndex(currentStageIndex + 1)
      } else if (flow === "SECOND") {
        if (nextStageIndex <= secondFlow.length - 1) setCurrentStageIndex(currentStageIndex + 1)
      } else {
        if (nextStageIndex <= stages.length - 1) setCurrentStageIndex(currentStageIndex + 1)
      }
      setLoading(false)
    }, 1000)
  }

  const onFlowTriggerSubmit = (flow: string) => {
    setLoading(true);
    setTimeout(() => {
      setFlow(flow)
      setCurrentStageIndex(0)
      setLoading(false)
    }, 1000)
  }

  if (flow === "SECOND" && currentStageIndex === 1) return <LongTermSecondFlow />

  const CurrentStage = flow === "FIRST" ? firstFlow[currentStageIndex]
    : flow === "SECOND" ? secondFlow[currentStageIndex] : stages[currentStageIndex];

  return (
    <div className='p-5 bg-[#EBF4FF] h-full rounded-xl w-full flex flex-col md:flex-row items-center space-y-5 md:space-y-0 space-x-5'>
      <div className='h-3/4 aspect-[3/4] md:h-full rounded-3xl'>
        <Image
          className='h-full rounded-3xl'
          src='/images/cuy-oraculo.png'
          alt='Cuy magico oraculo'
          width={600}
          height={500}
        />
      </div>
      <CurrentStage
        onSubmit={onStageSubmit}
        onFlowTriggerSubmit={onFlowTriggerSubmit}
        loading={loading}
      />
    </div>
  )
}

export default CuyChat