import React from 'react';
import logo from './assets/images/tinder.svg'
import './Header.css'
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className='Main__Header'>
            <IconButton>
                <PersonIcon fontSize='large' className="Header__Icon" />
            </IconButton>
            <img src={logo} className="Header__Logo" />
            <IconButton>
                <ForumIcon fontSize='large' className="Header__Icon" />
            </IconButton>
        </div>
    )
}

export default Header
