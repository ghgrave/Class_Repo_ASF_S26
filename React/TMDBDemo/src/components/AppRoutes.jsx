import {Routes, Route, Navigate} from "react-router-dom"
import LandingPage from "../pages/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Results from "../pages/Results.jsx";


const  AppRoutes =() =>{
    // const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/landing"/>}/>
            <Route path="/landing" element={<LandingPage/>} />
            <Route path="/errors" element={<ErrorPage/>} />
            <Route path="/results" element={<Results/>} />
        </Routes>
    )
}

export default AppRoutes;