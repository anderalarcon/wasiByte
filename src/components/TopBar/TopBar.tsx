import { Bell, ChevronDown } from 'lucide-react'
import React from 'react'

const TopBar = () => {
  return (
    <nav className='py-3 px-3  md:py-5 border-b-2 border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='text-lg font-semibold'>
          <h1>Bienvenido! ☀️</h1>
        </div>

        <div className='flex items-center space-x-5'>
          <div className='hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
            <Bell />
          </div>
          <div className='flex items-center space-x-2 p-2 rounded-lg'>
            <div className='h-8 w-8 rounded-full bg-slate-200' />
            <span className='text-sm font-medium'>Roger Vega</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
