import React from 'react'

export const Education = () => {
  return (
    <>
        <h1 className='text-4xl font-bold flex items-center gap-2'>Educación <hr className='border-violet-200 border-4 w-3/4'/></h1>
        <div className='p-4'>
            <div className='shadow-md rounded-lg'>
                <div className='p-4'>
                    <h2 className='text-2xl font-semibold'>Ingeniería en Sistemas Computacionales</h2>
                    <p className='text-gray-600'>Instituto Tecnológico Superior de Huauchinango</p>
                    <p className='text-gray-500'>2021 - Actualmente (8vo semestre finalizado)</p>
                </div>
            </div>
            <h2 className='p-2 font-bold text-2xl'>Reconocimientos</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='shadow-md rounded-lg'>
                <div className='p-4'>
                    <h2 className='text-2xl font-semibold'>Rally Latinoamericano de Innovación</h2>
                    <p className='text-gray-600'>2do Lugar (Nivel Sede)</p>
                    <p className='text-gray-500'>2024</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
