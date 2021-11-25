import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className="Navigation">
            <Link className="btn btn-outline-primary" to="/pets/new">Add a pet to the shelter</Link>
        </div>
    );
};

export default Navbar;


