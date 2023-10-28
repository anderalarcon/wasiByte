import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { StagesProps } from './types'
import { Loader2 } from 'lucide-react'

const ChatFirstStage = ({ onSubmit, loading }: StagesProps) => {
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
            <div className='text-white font-bold md:text-2xl'>Dile al Cuy mágico cuál es tu deseo</div>
            <Input
                type='text'
                placeholder='Pide tu deseo aqui'
            />
            <div className='w-[50%]'>
                <Button
                    className='bg-[#0030B3] w-full rounded-2xl'
                    onClick={onSubmit}
                    disabled={loading}
                >
                    {
                        loading ?
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            :
                            "Pedir"
                    }
                </Button>
            </div>
        </div>
    )
}

export default ChatFirstStage