import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { BellRing, Check, CheckCircle2 } from 'lucide-react'
import React from 'react'

const features = [
    {
        title: "No necesitas un seguro vehicular y lo financiamos hasta 60 meses"
    },
    {
        title: "Recomendado si es tu primer auto"
    }
]

const ShortTermFirstFlow = () => {
    return (
        <>
            <p className='text-white font-bold md:text-2xl'>
                Tu deseo es un{' '}
                <span className='text-[#0030B3]'>vehículo</span>
            </p>
            <p className='text-white text-xl font-bold'>El cuy mágico te recomienda:</p>
            <CardFeatures />
        </>
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

export default ShortTermFirstFlow