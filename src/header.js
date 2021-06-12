import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="home">
                            <i className="fa fa-home"></i> Dashboard
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="manageclients">
                            <i className="fa fa-eye"></i> Manage Clients
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="managerequirement">
                            <i className="fa fa-edit"></i> Manage Requirement
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="manageprofiles">
                            <i class="fa fa-users"></i> Manage Profiles
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="managebilling">
                            <i class="fa fa-file-invoice"></i> Manage Billing
                </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link">
                            HR - 1 <i className="fa fa-power-off text-danger"></i> Logout
                </Link>
                    </li>


                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

}

export default Header;