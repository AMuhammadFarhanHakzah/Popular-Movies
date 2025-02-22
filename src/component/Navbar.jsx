import "../css/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/"><img src="https://www.logologo.com/logos/abstract-isometric-logo-design-free-logo.jpg" /></Link>
                <Link to="/"><div>Home</div></Link>
                <Link to="/favorites"><div>Favorite</div></Link>
            </div>
        </div>
    )
}


export default Navbar