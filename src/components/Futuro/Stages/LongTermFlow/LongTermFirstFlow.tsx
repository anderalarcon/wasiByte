import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { BellRing, Check, CheckCircle2, Loader2 } from 'lucide-react'
import React from 'react'
import { StagesProps } from '../types'

const features = [
    {
        title: "No necesitas un seguro vehicular y lo financiamos hasta 60 meses"
    },
    {
        title: "Recomendado si es tu primer auto"
    }
]

const LongTermFirstFlow = ({ onSubmit, loading }: StagesProps) => {
    return (
        <div
            className={`
                w-full
                h-1/4
                md:h-full
                rounded-2xl
                p-10
                bg-white
                flex
                flex-col
                items-center
                justify-center
                md:space-y-4
                shadow-md
                text-[#0030B3]
                `
            }
        >
            <p className='font-bold md:text-2xl'>
                Simula el crédito del auto de tus sueños:
            </p>
            <div className='flex flex-col w-full items-start'>
                <div>
                    <label>Tipo de moneda de tu cuota inicial</label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Seleccione el tipo de moneda" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="S/">S/</SelectItem>
                                <SelectItem value="$">$</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label>¿Cuál es el costo del vehículo?</label>
                </div>
            </div>
            <div className='w-[50%]'>
                <Button className="bg-[#FF7800] w-full rounded-2xl" disabled={loading} onClick={onSubmit}>
                    {
                        loading ?
                            <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                            :
                            "Planificar mi deseo"
                    }
                </Button>
            </div>
        </div>
    )
}

type CardProps = React.ComponentProps<typeof Card>

export function CardFeatures({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle className='text-[#0030B3]'>Crédito Auto usado</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    {features.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] pb-4 last:mb-0 last:pb-0 gap-2 items-center"
                        >
                            <CheckCircle2 className='text-[#0030B3] text-xs' />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="bg-[#0030B3] w-full rounded-2xl">
                    Descubre cómo conseguir el auto
                </Button>
            </CardFooter>
        </Card>
    )
}

export default LongTermFirstFlow