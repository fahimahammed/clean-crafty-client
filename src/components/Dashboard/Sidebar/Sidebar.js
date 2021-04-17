import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faList, faListAlt, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`https://morning-retreat-13723.herokuapp.com/admin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data[0] || 0))
    },[])
    return (
        <section className='sidebar'>
            <img className='sidebar-logo pb-5 pt-3' src={logo} alt=""/>
                    {
                        isAdmin ? <div className='ps-3 pe-3'>
                        <div className='sidebar-item'>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to='/addService'>
                                <FontAwesomeIcon icon={faPlusSquare} /> Add Service
                            </Link>
                        </div>
                        <div className='sidebar-item'>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to='/order-list'>
                                <FontAwesomeIcon icon={faList} /> Order List
                            </Link>
                        </div>
                        <div className='sidebar-item'>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to='/manage-service'>
                                <FontAwesomeIcon icon={faEdit} /> Manage Service
                            </Link>
                        </div>
                        <div className='sidebar-item'>
                            <Link style={{textDecoration: 'none', color: 'blue'}} to='/make-admin'>
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </Link>
                        </div>
                    </div> :
                        <div className='ps-3 pe-3'>
                            <div className='sidebar-item'>
                                <Link style={{textDecoration: 'none', color: 'blue'}} to='/checkout/:id'>
                                    <FontAwesomeIcon icon={faServicestack} /> Service
                                </Link>
                            </div>
                            <div className='sidebar-item'>
                                <Link style={{textDecoration: 'none', color: 'blue'}} to='/orders/:email'>
                                    <FontAwesomeIcon icon={faListAlt} /> Service List
                                </Link>
                            </div>
                            <div className='sidebar-item'>
                                <Link style={{textDecoration: 'none', color: 'blue'}} to='/add-review'>
                                    <FontAwesomeIcon icon={faComment} /> Review
                                </Link>
                            </div>
                        </div>
                    }

                    
                    

                
        </section>
    );
};

export default Sidebar;