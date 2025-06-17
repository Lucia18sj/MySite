import { RiCakeLine, RiComputerLine, RiDownloadLine, RiGitBranchLine, RiGithubLine, RiLinkedinFill, RiMailAiLine, RiMailLine, RiMapLine, RiMapPinLine, RiPhoneLine, RiWhatsappLine } from '@remixicon/react'
import React from 'react'

export const Home = () => {
  return (
    <>
        <div className='flex p-7 gap-5 bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 h-screen justify-center items-center'>
            <div className='w-3/12'>
                <div className='bg-violet-500 shadow-md rounded-lg p-5 mb-5 w-64 h-64 justify-self-center'>
                    
                </div>
                <div className=' grid backdrop-blur-sm bg-white shadow-md rounded-lg p-5 gap-3 '>
                    
                    <h2 className='text-xl text-center mt-8'>Ana Lucía Rmz. San Juan</h2>
                    <div className='flex gap-3 justify-center'>
                        <a href='https://www.linkedin.com/in/lucia-san-juan-7aa728366' target="_blank" rel="noopener noreferrer" className='bg-white shadow-md rounded-lg p-3 hover:bg-sky-500 hover:text-white transition-colors duration-300'>
                            <RiLinkedinFill/>
                        </a>
                        <a href='https://github.com/Lucia18sj' target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-violet-900 hover:text-white transition-colors duration-300'>
                            <RiGithubLine/>
                        </a>
                        <a href='mailto:lucia.sanjuan.040114@gmail.com'target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-red-500 hover:text-white transition-colors duration-300'>
                            <RiMailLine/>
                        </a>
                        <a href='https://wa.me/7761482583' target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors duration-300'>
                            <RiWhatsappLine/>
                        </a>
                    </div>
                    <div className='grid p-5 gap-2'>
                        <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center hover:bg-sky-100 transition-colors duration-300'>
                            <RiPhoneLine className='ml-2'/>
                            <div>
                                <p>Phone</p>
                                <p>776-148-2583</p>
                            </div>
                        </div>
                        <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center'>
                            <RiMailLine className='ml-2'/>
                            <div>
                                <p>E-mail</p>
                                <p>lucia.sanjuan.040114@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-5 content-center  rounded-md shadow-md p-2 items-center'>
                            <RiMapPinLine className='ml-2'/>
                            <div>
                                <p>E-mail</p>
                                <p>Puebla, México</p>
                            </div>
                        </div>
                        <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center'>
                            <RiCakeLine className='ml-2'/>
                            <div>
                                <p>E-mail</p>
                                <p>Dic 19, 2003 (21 años)</p>
                            </div>
                        </div>
                    </div>
                    <button className='flex gap-2 w-1/2 bg-sky-500 text-white shadow-md rounded-lg p-2 content-center justify-self-center hover:bg-sky-700 transition-colors duration-300 animate-bounce'>
                        <RiDownloadLine/>
                        Download CV
                    </button>
                </div>
            </div>

            <section className='bg-white shadow-md rounded-lg p-5 w-3/6'>

            </section>
            <nav className='bg-white shadow-md rounded-lg p-5 w-1/12 backdrop-blur-sm'>
                <div className='flex flex-col gap-5'>
                    <a className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
                        <RiComputerLine/>
                        <span>About Me</span>
                    </a>
                    <a className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
                        <RiGitBranchLine/>
                        <span>Projects</span>
                    </a>
                    <a className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
                        <RiMailAiLine/>
                        <span>Contact</span>
                    </a>
                </div>
            </nav>
        </div>
    </>
  )
}
