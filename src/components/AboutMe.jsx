import { RiBootstrapLine, RiCodeSSlashLine, RiGithubLine, RiJavaLine, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine } from '@remixicon/react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export const AboutMe = () => {
    
  return (
    <>
        <section>
            <h1 className='text-4xl font-bold flex items-center gap-2'>Sobre Mí <hr className='border-violet-200 border-4 w-3/4'/></h1>
            <p className='p-5 text-justify'>
                <p className='text-2xl font-bold'>¡Hola!</p> Soy Lucía San Juan, estudiante de ingeniería en Sistemas Computacionales apasionada por la tecnología
                y el desarrollo Web.
                <br/>
                <br/>
                Tengo Experiencia creando aplicaciones de escritorio, web, moviles y videojuegos. Me especializo en tecnologías
                como JavaScript, React, TypeScript, Java y C#, tambien cuento con conocimientos sólidos en base de datos SQL y diseño UX/UI.
                <br/>
                Disfruto diseñar y desarrollar soluciones que sean funcionales, accesibles y visiblemente atractractivas, siempre buscando aprender cosas nuevas.
                <br/>
                <br/>
                <p className='font-bold'>Actualmente me encuentro en busqueda de Prácticas Profesionales, donde pueda aplicar mis habilidades, adquirir experiencia real y contribuir a proyectos desafiantes.</p>

            </p>
            <h1 className='text-4xl font-bold flex items-center gap-2'>Skills <hr className='border-violet-200 border-4 w-3/4'/></h1>
            <div className='p-5'>
                <div>
                    <p className='text-2xl font-bold'>Lenguajes de Programación</p>
                    <section className='flex gap-2 overflow-x-auto w-full flex-nowrap h-40 px-4 mt-4'>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-orange-400 p-2 rounded-full place-self-center text-white'><RiJavaLine/></figure>
                            <p className='text-center font-bold '>Java</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-yellow-400 p-2 rounded-full place-self-center text-white'><RiJavascriptLine/></figure>
                            <p className='text-center font-bold '>JavaScript</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-sky-500 p-2 rounded-full place-self-center text-white'><RiJavascriptLine/></figure>
                            <p className='text-center font-bold '>TypeScript</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-blue-500 p-2 rounded-full place-self-center text-white'><RiJavascriptLine/></figure>
                            <p className='text-center font-bold '>C#</p>
                        </div>
                    </section>
                </div>
                
                <div>
                    <p className='text-2xl font-bold'>Frameworks y librerias</p>
                    <section className='flex gap-2 overflow-x-auto w-full flex-nowrap h-40 px-4 mt-4'>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-cyan-300 p-2 rounded-full place-self-center text-white'><RiReactjsLine/></figure>
                            <p className='text-center font-bold '>React</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-cyan-400 p-2 rounded-full place-self-center text-white'><RiTailwindCssLine/></figure>
                            <p className='text-center font-bold '>Tailwind CSS</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-violet-500 p-2 rounded-full place-self-center text-white'><RiBootstrapLine/></figure>
                            <p className='text-center font-bold '>Bootstrap</p>
                        </div>
                    </section>
                </div>

                <div>
                    <p className='text-2xl font-bold'>Herramientas y entornos</p>
                    <section className='flex gap-2 overflow-x-auto w-full flex-nowrap h-40 px-4 mt-4'>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-violet-900 p-2 rounded-full place-self-center text-white'><RiGithubLine/></figure>
                            <p className='text-center font-bold '>Git & GitHub</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-sky-500 p-2 rounded-full place-self-center text-white'><RiCodeSSlashLine/></figure>
                            <p className='text-center font-bold '>VS Code</p>
                        </div>
                        <div className='p-2 justify-center p-3 rounded-lg shadow-md w-32 h-32 shrink-0 content-center'>
                            <figure className='bg-emerald-500 p-2 rounded-full place-self-center text-white'><RiCodeSSlashLine/></figure>
                            <p className='text-center font-bold '>NetBeans</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
  )
}
