import FisicaGeneral1 from '/cardProyect/fisicaGeneral/fisicaGeneral1.png';
import FisicaGeneralM1 from '/cardProyect/fisicaGeneral/fisicaGeneralM1.png';
import FisicaGeneralM21 from '/cardProyect/fisicaGeneral/fisicaGeneralM2-1.png';
import FisicaGeneralM22 from '/cardProyect/fisicaGeneral/fisicaGeneralM2-2.png';
import FisicaGeneralM23 from '/cardProyect/fisicaGeneral/fisicaGeneralM2-3.png';
import FisicaGeneralM3 from '/cardProyect/fisicaGeneral/fisicaGeneralM3-1.png';
import FisicaGeneralM4 from '/cardProyect/fisicaGeneral/fisicaGeneralM4-1.png';
import FisicaGeneralM5 from '/cardProyect/fisicaGeneral/fisicaGeneralM5.png';
import FisicaGeneralM61 from '/cardProyect/fisicaGeneral/fisicaGeneralM6-1.png';
import FisicaGeneralM62 from '/cardProyect/fisicaGeneral/fisicaGeneralM6-2.png';
import FisicaGeneralM7 from '/cardProyect/fisicaGeneral/fisicaGeneralM7.png';
import FisicaGeneralDocument from '/cardProyect/fisicaGeneral/protocoloInvestigacion.pdf';

import PanaderiaPan1 from '/cardProyect/panaderiaBackend/panaderiaPan1.png';
import PanaderiaDocument from '/cardProyect/panaderiaBackend/panaderiaPanBackend.pdf';
const proyects = [
    {
        id_proyect: 1,
        title: 'Software Educativo de Física General',
        year: '2021',
        img: [FisicaGeneral1, FisicaGeneralM1, FisicaGeneralM21, FisicaGeneralM22, FisicaGeneralM23, FisicaGeneralM3, FisicaGeneralM4, FisicaGeneralM5, FisicaGeneralM61, FisicaGeneralM62, FisicaGeneralM7],
        documentation: FisicaGeneralDocument,
        description: '',
        github: 'https://github.com/Lucia18sj/Software-Educativo-de-Fisica-General',
        tecnologies: ['Java'],
        plataform: 'Escritorio'
    },
    {
        id_proyect: 2,
        title: '',
        year: '',
        img: [PanaderiaPan1],
        documentation: PanaderiaDocument,
        description: '',
        github: '',
        tecnologies: ['Node.js'],
        plataform: 'Web'
    },
    {
        id_proyect: 3,
        title: '',
        year: '',
        img: [PanaderiaPan1],
        documentation: PanaderiaDocument,
        description: '',
        github: '',
        tecnologies: ['Node.js'],
        plataform: 'Web'
    },
    {
        id_proyect: 4,
        title: 'Panadería de Pan (Backend)',
        year: '2024',
        img: [PanaderiaPan1],
        documentation: PanaderiaDocument,
        description: 'Sistema backend desarrollado con Node.js y Express.js para gestionar usuarios, productos, pedidos y pagos de una panadería en línea. Incluye funcionalidades como control de inventario, gestión de cuentas, carrito de compras y sistema de roles (cliente y administrador).',
        github: 'https://github.com/Lucia18sj/Panaderia-de-Pan',
        tecnologies: ['Node.js','Express', 'JavaScript', 'MySQL'],
        plataform: 'Web'
    },
]
export default proyects;