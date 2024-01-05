import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Faqs from "../views/Faqs"


const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/faqs" element={<Faqs />} />
            </Routes>
        </>
    )
}

export default AppRoutes