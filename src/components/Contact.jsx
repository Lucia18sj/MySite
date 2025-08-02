import React from 'react'

export const Contact = () => {
  return (
    <>
        <h1 className='text-4xl font-bold flex items-center gap-2'>Contacto <hr className='border-violet-200 border-4 w-3/4'/></h1>
        <div className='p-4 h-100'>
            <form className='grid grid-cols-2 gap-3'>
                <div className='grid'>
                    <label className='text-neutral-500'>Nombre</label>
                    <input type='text' placeholder='Tu Nombre' name='name' className='border-b-2 border-black p-1 ms-2 text-lg font-medium'></input>
                </div>
                <div className='grid'>
                    <label>Email</label>
                    <input type='text' placeholder='Tu Email' name='email' className='border-b-2 border-black p-1 ms-2 text-lg font-medium'></input>
                </div>
                <div className='grid span-2'>
                    <label>Asunto</label>
                    <input type='text' placeholder='Asunto' name='subjet' className='border-b-2 border-black p-1 ms-2 text-lg font-medium'></input>
                </div>
                <div className='grid col-span-2'>
                    <label>Mensaje</label>
                    <textarea placeholder='Escribe aqui tu mensaje...' name='message' className='border-b-2 border-black p-1 ms-2 text-lg font-medium rounded-md'></textarea>
                </div>
            </form>
            <button className='bg-violet-500 text-white p-2 ps-3 pe-3 rounded-md hover:bg-violet-600 transition-colors duration-300 font-bold text-lg mt-9'>
                Enviar
            </button>
        </div>
    </>
  )
}
