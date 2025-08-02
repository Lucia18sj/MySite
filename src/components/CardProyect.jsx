import proyects from '../components/proyects.js';

export const CardProyect = () => {
  return (
    <>
      {proyects.map((proyect) => (
        <div key={proyect.id} className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <img src={proyect.img[0]} alt={proyect.title} className='h-48 justify-self-center'/>
          <div className='p-4'>
            <h2 className='text-2xl font-bold'>{proyect.title}</h2>
            <p className='text-gray-600'>Año: {proyect.year}</p>
          </div>
        </div>
      ))}
    </>
  );
};

