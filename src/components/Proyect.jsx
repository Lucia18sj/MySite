import React from 'react'
import { CardProyect } from './CardProyect'

export const Proyect = () => {
  return (
    <>
        <h1 className='text-4xl font-bold flex items-center gap-2'>Proyectos <hr className='border-violet-200 border-4 w-3/4'/></h1>
        <div className='p-4 grid grid-cols-2 gap-2 max-sm:grid-cols-1 '>
          <CardProyect/>
        </div>
    
    </>
  )
}
