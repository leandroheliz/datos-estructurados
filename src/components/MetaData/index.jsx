import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TuComponente = () => {
  const [titulo, setTitulo] = useState('Título Inicial');
  const [descripcion, setDescripcion] = useState('Descripción Inicial');

  useEffect(() => {
    // Simulación de carga de datos desde una API
    setTimeout(() => {
      setTitulo('Nuevo Título Dinámico');
      setDescripcion('Nueva Descripción Dinámica');
    }, 2000); // Simula una carga de datos después de 2 segundos
  }, []);

  return (
    <div>
      <Helmet>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
      </Helmet>

      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};

export default TuComponente;
