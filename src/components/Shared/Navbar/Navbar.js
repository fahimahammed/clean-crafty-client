import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand" href="#"><img className='img-fluid logo' src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" >Our Team</Link>
                        </li>
                        
                        {
                            loggedInUser.email ? <img className='profile-pic' src={loggedInUser.photoURL} alt=""/> 
                            : <li className="nav-item">
                                <Link to='/login'><button className="btn btn-primary nav-link text-white">Login</button></Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;