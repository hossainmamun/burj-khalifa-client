import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App.js';
import '../../StyleSheet/Navigation.scss'

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">burj-khalifa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item d-flex align-items-center">
                            {
                                loggedInUser.email ?
                                    <div>
                                        <small className='text-white text-capitalize me-4'>{loggedInUser.username}</small>
                                        <button className='btn btn-outline-danger px-4' onClick={() => setLoggedInUser({})}>SignOut</button>
                                    </div> :
                                    <Link to="/login">
                                        <button class="btn btn-outline-light">Login</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;