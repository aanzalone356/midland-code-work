import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return( 
        <nav>
            <ul>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/FavortiesPage'>Favorites</Link></li>
                <li><Link to='./Search'>Search</Link></li>
            </ul>
        </nav>
    )
};

export default Menu;