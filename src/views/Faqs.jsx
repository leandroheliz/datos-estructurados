import { Helmet } from 'react-helmet';

const Faqs = () => {
    const preguntasFrecuentesSchema = [
        {
            "@type": "Question",
            "name": "Pregunta de prueba 1 LOREM",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint labore doloribus. Nisi possimus, porro cupiditate vitae quos optio, reprehenderit non eligendi, expedita sint dolore odio cum harum modi inventore.Incidunt necessitatibus modi, dolore aspernatur hic explicabo eaque vero dolores in iure delectus! Debitis sit dolore doloribus rerum voluptates, cupiditate suscipit, reiciendis culpa enim laboriosam aspernatur ad nihil repudiandae aut. At laboriosam optio quod molestiae voluptates earum totam exercitationem eius quam in esse pariatur aperiam, porro hic mollitia, nostrum quis quibusdam, animi nobis Reprehenderit laudantium nulla quos! Animi, distinctio dicta. Vel neque voluptates."
            }
        },
        {
            "@type": "Question",
            "name": "Pregunta de prueba 2 LOREM",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nisi possimus, porro cupiditate vitae quos optio, reprehenderit non eligendi, expedita sint dolore odio cum harum modi inventore.Incidunt necessitatibus modi, dolore aspernatur hic explicabo eaque vero dolores in iure delectus! Debitis sit dolore doloribus rerum voluptates, cupiditate suscipit, reiciendis culpa enim laboriosam aspernatur ad nihil repudiandae aut."
            }
        },
        {
            "@type": "Question",
            "name": "Pregunta de prueba 3 LOREM",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nisi possimus, porro cupiditate vitae quos optio, reprehenderit non eligendi, expedita sint dolore odio cum harum modi inventore.Incidunt necessitatibus modi, dolore aspernatur hic explicabo eaque vero dolores in iure delectus! Debitis sit dolore doloribus rerum voluptates, cupiditate suscipit, reiciendis culpa enim laboriosam aspernatur ad nihil repudiandae aut."
            }
        }
    ];

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frequently Asked Questions | Schemas SEO</title>
                <link rel="canonical" href="https://schemas-seo.vercel.app/faqs" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": preguntasFrecuentesSchema
                    })
                }} />
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">FAQs</h1>
                        {/* Mapea preguntasFrecuentesSchema y muestra el contenido */}
                        {preguntasFrecuentesSchema.map((pregunta, index) => (
                            <div key={index} className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    {pregunta.name}
                                </div>
                                <div className="collapse-content">
                                    <p>{pregunta.acceptedAnswer.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faqs;
