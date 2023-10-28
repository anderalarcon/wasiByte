import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { StagesProps } from './types'

const ChatFirstStage = ({ onSubmit }: StagesProps) => {
    return (
        <>
            <div className='text-white font-bold md:text-2xl'>Dile al Cuy mágico cuál es tu deseo</div>
            <Input
                type='text'
                placeholder='Pide tu deseo aqui'
            />
            <div className='w-[50%]'>
                <Button className='bg-[#0030B3] w-full rounded-2xl' onClick={onSubmit}>
                    Pedir
                </Button>
            </div>
        </>
    )
}

export default ChatFirstStage