import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { AboutMe } from './components/AboutMe'
import { Education } from './components/Education'
import { Proyect } from './components/Proyect'
import { Contact } from './components/Contact'

import {
  RiCakeLine, RiComputerLine, RiDownloadLine, RiGithubLine, RiGlobalLine,
  RiGraduationCapLine, RiLinkedinFill, RiMailAiLine, RiMailLine, RiMapPinLine,
  RiPhoneLine, RiUser6Line, RiWhatsappLine
} from '@remixicon/react'

export const App = () => {
  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert('Texto copiado al portapapeles: ' + texto)
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err)
      })
  }

  return (
    <BrowserRouter>
      <div className='flex p-7 gap-5 bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 h-screen justify-center items-center max-sm:grid max-sm:h-full max-sm:p-2 max-sm:gap-2'>
        {/* LADO IZQUIERDO */}
        <div className='w-3/12 max-sm:w-full max-sm:p-2'>
          <div className='z-40 bg-violet-500 shadow-md rounded-lg p-5 mb-5 w-64 h-64 justify-self-center max-sm:w-32 max-sm:h-32'></div>

          <div className='z-50 grid backdrop-blur-sm bg-white shadow-md rounded-lg p-5 gap-3 max-sm:w-full'>
            <h2 className='text-xl text-center'>Ana Lucía Rmz. San Juan</h2>

            <div className='flex gap-3 justify-center'>
              <a href='https://www.linkedin.com/in/lucia-san-juan-7aa728366' target="_blank" rel="noopener noreferrer" className='bg-white shadow-md rounded-lg p-3 hover:bg-sky-500 hover:text-white transition-colors duration-300'>
                <RiLinkedinFill />
              </a>
              <a href='https://github.com/Lucia18sj' target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-violet-900 hover:text-white transition-colors duration-300'>
                <RiGithubLine />
              </a>
              <a href='mailto:lucia.sanjuan.040114@gmail.com' target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-red-500 hover:text-white transition-colors duration-300'>
                <RiMailLine />
              </a>
              <a href='https://wa.me/7761482583' target="_blank" rel="noopener noreferrer" className=' bg-white shadow-md rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors duration-300'>
                <RiWhatsappLine />
              </a>
            </div>

            <div className='grid p-5 gap-2 max-sm:grid-cols-2 max-sm:text-sm max-sm:p-1'>
              <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center hover:bg-pink-100 transition-colors duration-300 max-sm:grid max-sm:justify-items-center max-sm:gap-1' onClick={() => copiarTexto('776-148-2583')}>
                <RiPhoneLine className='ml-2' />
                <div>
                  <p className='font-bold'>Phone</p>
                  <p>776-148-2583</p>
                </div>
              </div>

              <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center hover:bg-pink-100 transition-colors duration-300 max-sm:grid max-sm:justify-items-center max-sm:gap-1' onClick={() => copiarTexto('lucia.sanjuan.040114@gmail.com')}>
                <RiMailLine className='ml-2' />
                <div>
                  <p className='font-bold'>E-mail</p>
                  <p>lucia.sanjuan.040114@gmail.com</p>
                </div>
              </div>

              <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center max-sm:grid max-sm:justify-items-center max-sm:gap-1'>
                <RiMapPinLine className='ml-2' />
                <div>
                  <p className='font-bold'>Ubicación</p>
                  <p>Puebla, México</p>
                </div>
              </div>

              <div className='flex gap-5 content-center rounded-md shadow-md p-2 items-center max-sm:grid max-sm:justify-items-center max-sm:gap-1'>
                <RiGlobalLine className='ml-2' />
                <div>
                  <p className='font-bold'>English</p>
                  <p>Intermedio B1</p>
                </div>
              </div>
            </div>

            <button className='flex gap-2 w-1/2 bg-sky-500 text-white shadow-md rounded-lg p-2 content-center justify-self-center hover:bg-sky-700 transition-colors duration-300 animate-bounce max-sm:flex max-sm:w-3/4'>
              <RiDownloadLine />
              Download CV
            </button>
          </div>
        </div>

        {/* SECCIÓN DE CONTENIDO CAMBIANTE */}
        <section className='bg-white shadow-md rounded-lg p-7 w-3/6 h-4/5 max-sm:w-full max-sm:h-96 max-sm:p-4 overflow-y-auto'>
          <Routes>
            <Route path="/MySite/" element={<AboutMe />} />
            <Route path="/MySite/education" element={<Education />} />
            <Route path="/MySite/proyects" element={<Proyect />} />
            <Route path="/MySite/contact" element={<Contact />} />
          </Routes>
        </section>

        {/* NAVEGACIÓN */}
        <nav className='bg-white shadow-md rounded-lg p-5 w-1/12 backdrop-blur-sm max-sm:w-full max-sm:bg-white/50 max-sm:backdrop-blur-xs max-sm:inline-block bottom-0 left-0'>
          <div className='grid gap-5 max-sm:grid-cols-4 max-sm:gap-2 max-sm:text-sm'>
            <Link to="/MySite/" className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
              <RiUser6Line />
              <span>Resumen</span>
            </Link>
            <Link to="/MySite/education" className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
              <RiGraduationCapLine />
              <span>Educación</span>
            </Link>
            <Link to="/MySite/proyects" className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
              <RiComputerLine />
              <span>Proyectos</span>
            </Link>
            <Link to="/MySite/contact" className='place-items-center grid gap-2 items-center hover:bg-violet-200 p-2 rounded-lg transition-colors duration-300'>
              <RiMailAiLine />
              <span>Contacto</span>
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  )
}
