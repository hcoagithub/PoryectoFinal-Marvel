import { Link } from "react-router-dom";
import "./style.css"


const Navbar=()=>{

    return (


        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
 <div className="container d-flex">


    <img src="https://i0.wp.com/modogeeks.com/wp-content/uploads/2017/07/Marvel-Logo-1.png?ssl=1" alt="..." id="marvel"/>
 
    <Link className="nav-link" to="/">Home</Link>

    <Link className="nav-link" to="/Creator">Creadores</Link>

    <Link className="nav-link" to="/Characters">Characters</Link>

    <Link className="nav-link" to="">Comics</Link>

    <Link className="nav-link" to="">Events</Link>

    <Link className="nav-link" to="">Series</Link>

    <Link className="nav-link" to="">Stories</Link>
 
 
</div>
    
       
    
      </nav>

    )
}

export default Navbar;