import { Helmet } from "react-helmet"
import { useState } from 'react';

const Faqs = () => {
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [preguntasFrecuentes, setPreguntasFrecuentes] = useState([]);
    const [preguntasFrecuentesSchema, setPreguntasFrecuentesSchema] = useState([]);


    const agregarPreguntaFrecuente = () => {
        // Verifica que tanto la pregunta como la respuesta estén presentes
        if (pregunta && respuesta) {
            // Crea un nuevo objeto con la pregunta y la respuesta
            const nuevaPregunta = { pregunta, respuesta };

            // Actualiza el estado de las preguntas frecuentes
            setPreguntasFrecuentes([...preguntasFrecuentes, nuevaPregunta]);

            // Limpia los campos del formulario después de agregar la pregunta
            setPregunta('');
            setRespuesta('');
        } else {
            alert('Por favor, completa tanto la pregunta como la respuesta.');
        }
    };

    const agregarPreguntaFrecuente = () => {
        // Verifica que tanto la pregunta como la respuesta estén presentes
        if (pregunta && respuesta) {
          // Crea un nuevo objeto con la pregunta y la respuesta
          const nuevaPregunta = { pregunta, respuesta };
      
          // Actualiza el estado de las preguntas frecuentes
          setPreguntasFrecuentes([...preguntasFrecuentes, nuevaPregunta]);
      
          // Crea un nuevo objeto para el esquema de preguntas frecuentes
          const nuevoEsquema = {
            "@type": "Question",
            "name": pregunta,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": respuesta
            }
          };
      
          // Actualiza el estado del esquema de preguntas frecuentes
          setPreguntasFrecuentesSchema([...preguntasFrecuentesSchema, nuevoEsquema]);
      
          // Limpia los campos del formulario después de agregar la pregunta
          setPregunta('');
          setRespuesta('');
        } else {
          alert('Por favor, completa tanto la pregunta como la respuesta.');
        }
      };
      
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frequently Asked Questions | Schemas SEO</title>
                <link rel="canonical" href="https://schemas-seo.vercel.app/faqs" />
            </Helmet>
            <div>
                <h2>Formulario de Preguntas Frecuentes</h2>
                <div>
                    <label htmlFor="inputPregunta">Pregunta:</label>
                    <input
                        type="text"
                        id="inputPregunta"
                        value={pregunta}
                        onChange={(e) => setPregunta(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputRespuesta">Respuesta:</label>
                    <input
                        type="text"
                        id="inputRespuesta"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                    />
                </div>
                <button onClick={agregarPreguntaFrecuente}>Agregar Pregunta Frecuente</button>

                {/* Muestra las preguntas frecuentes agregadas */}
                <div>
                    <h3>Esquema de Preguntas Frecuentes</h3>
                    <ul>
                        {preguntasFrecuentes.map((pregunta, index) => (
                            <li key={index}>
                                <strong>Pregunta:</strong> {pregunta.pregunta}, <strong>Respuesta:</strong>{' '}
                                {pregunta.respuesta}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Faqs