import { Link } from "react-router-dom"
import Nav from "../nav/Nav"


const Header = () => {

    return (
        <div>
            <Link to="/"><h1>Projektas "Orai Lietuvoje"</h1></Link>
            <Nav/>
        </div>
    )
}

export default Header