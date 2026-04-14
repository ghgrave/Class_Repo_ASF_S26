import {useNavigate} from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <h2>Landing Page</h2>
            <button
                onClick={() => navigate("/results")}
            >Now Playing</button>
        </>
    )
}

export default LandingPage;