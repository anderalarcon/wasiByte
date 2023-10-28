import { Button } from '@/components/ui/button'
import { StagesProps } from './types'
import { ArrowRight } from 'lucide-react'

const ChatSecondStage = ({ onSubmit, onFlowTriggerSubmit }: StagesProps) => {
    return (
        <>
            <p className='text-white font-bold md:text-2xl'>
                Entiendo que quieres un Audi Q7. Sin embargo, dada tu capacidad financiera actual,
                ese no sería un deseo alcanzable a <b className='text-[#0030B3]'>corto plazo</b>.
                Puedo ofrecerte una opción para lograrlo a <b className='text-[#0030B3]'>largo plazo</b>, o puedes optar por una opción
                para cubrir tu necesidad de un auto a <b className='text-[#0030B3]'>corto plazo</b>
            </p>
            <div className='w-[50%]'>
                <Button
                    variant="ghost"
                    className='text-white font-bold'
                    onClick={() => onFlowTriggerSubmit!("FIRST")}
                >
                    Quiero mi sueño a corto plazo  <ArrowRight />
                </Button>
                <Button
                    variant="ghost"
                    className='text-white font-bold'
                    onClick={() => onFlowTriggerSubmit!("SECOND")}
                >
                    Quiero mi sueño a largo plazo <ArrowRight />
                </Button>
            </div>
        </>
    )
}

export default ChatSecondStage