import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inicio | Datos Estructurados | Schemas SEO</title>
                <link rel="canonical" href="https://schemas-seo.vercel.app" />
                <meta name="description" content="Meta descripción de prueba - HOME" />
                
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home