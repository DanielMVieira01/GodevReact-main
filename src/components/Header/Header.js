import React from 'react'
import Collection from './Collection';
import Logo from './Logo';
import Search from './Search.js'
import User from './User.js';
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <Logo />
            <Collection />
            <Search />
            <User />
        </div>
    )
}
export default Header;