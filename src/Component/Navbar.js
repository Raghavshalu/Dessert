import react from 'react';
import {Link} from 'react-router-dom'
function Navbar(){

    return(
        <nav className="Navbar">
            <h1>Dessert Journal</h1>
        <div className="Links">
        <Link to="/" className="Home" style={{ padding: '15px',color: 'white',textDecoration:'none'}}>Home</Link>
        <Link to="/contact" className="Contact" style={{ padding: '15px',color: 'white',textDecoration:'none'}}>Contact us</Link>
        </div>
        </nav>
    )
}
export default Navbar;