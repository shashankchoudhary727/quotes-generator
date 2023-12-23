import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <Link to="/">Quote Gen</Link>
                 <div className='sub-navbar'>
                <Link to="/">
                    Quetes
                </Link>
                <Link to="/jokes">
                    Jokes
                </Link>
                <li>
                    About
                </li>
                </div>

            </div>
        </>
    )
}

export default Navbar;