import {React, useState} from 'react'
import {Link} from 'react-router-dom';
import ItemStyled from "../styled/elements/ItemStyled"
import Spacer from '../styled/elements/spacer';
import Navbar from '../styled/elements/Navbar';

const pages = ['Main Page', 'Anime List', 'Random Anime'];
const settings = ['Profile', 'Account', 'Logout'];

//Standard JS Nav Bar

const NavBar = () => {
    return( 
        <Navbar>
                <ItemStyled><Link to='./login'>Login</Link></ItemStyled>
                <Spacer mr={30}/>
                <ItemStyled><Link to='./MainPage'>Main Page</Link></ItemStyled>
                <Spacer mr={30}/>
                <ItemStyled><Link to='./randomAnime'>Random Anime</Link></ItemStyled>
                <Spacer mr={30}/>
                <ItemStyled><Link to='./animeList'>Anime List</Link></ItemStyled>
        </Navbar>
    )
}

export default NavBar;