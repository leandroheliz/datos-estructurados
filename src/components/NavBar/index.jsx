import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-slate-500">
                <NavLink to="/" className="btn btn-ghost text-xl">
                    <button className="btn">
                    Schema SEO
                    </button>
                    </NavLink>

                    <NavLink to="/faqs" className="btn btn-ghost text-xl">
                    <button className="btn">
                   Preguntas Frecuentes
                    </button>
                    </NavLink>


            </div>
        </>
    )
}

export default NavBar