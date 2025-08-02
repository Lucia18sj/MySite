import proyects from '../components/proyects.js';

export const OneProyect = () => {
  return (
    <>
        {
            proyects.map((proyect) => (
                <div key={proyect.id_proyect}>

                </div>
            ))
        }
    </>
  )
}
