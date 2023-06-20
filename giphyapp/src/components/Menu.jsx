import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../styled/elements/Container';

const Menu = () => {
    return( 
        <Container row>
            <ul>
                <li><Link to='./HomePage'>HomePage</Link></li>
                <li><Link to='./Login'>Login</Link></li>
                <li><Link to='./FavortiesPage'>Favorites</Link></li>
                <li><Link to='./Search'>Search</Link></li>
            </ul>
        </Container>
    )
};

export default Menu;