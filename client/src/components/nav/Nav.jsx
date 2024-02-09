import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/mycities">My Cities</Link>
        </div>
    )
}

export default Nav