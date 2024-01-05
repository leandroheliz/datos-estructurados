import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TuComponente = () => {
  const [titulo, setTitulo] = useState('Título Inicial');
  const [descripcion, setDescripcion] = useState('Descripción Inicial');

  useEffect(() => {
    setTimeout(() => {
      setTitulo('Nuevo Título Dinámico');
      setDescripcion('Nueva Descripción Dinámica');
    }, 2000); 
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
