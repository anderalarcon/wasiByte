import { Button } from '@/components/ui/button'
import { StagesProps } from './types'
import { ArrowRight, Loader2 } from 'lucide-react'

const ChatSecondStage = ({ onSubmit, onFlowTriggerSubmit, loading }: StagesProps) => {
    return (
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
                shadow-md
                `
            }
        >
            <p className='text-white font-bold md:text-2xl'>
                Entiendo que quieres un Audi Q7. Sin embargo, dada tu capacidad financiera actual,
                ese no sería un deseo alcanzable a <b className='text-[#0030B3]'>corto plazo</b>.
                Puedo ofrecerte una opción para lograrlo a <b className='text-[#0030B3]'>largo plazo</b>, o puedes optar por una opción
                para cubrir tu necesidad de un auto a <b className='text-[#0030B3]'>corto plazo</b>
            </p>
            <div className='w-[50%] flex flex-col items-center'>
                {
                    loading ?
                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-white text-2xl" />
                    :
                        <>
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
                        </>
                }
            </div>
        </div>
    )
}

export default ChatSecondStage