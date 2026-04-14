
import AppRoutes from "./components/AppRoutes.jsx";
import NavBar from "./components/NavBar.jsx";
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>

        <Router>
            <NavBar/>
            <AppRoutes />
        </Router>
    </>
  )
}

export default App;