import './components.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>About</Link>
        </div>
    );
}

export default NavBar;