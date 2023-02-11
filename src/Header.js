import React from 'react'
import { useDataLayerValue } from './DataLayer';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import './Header.css'

function Header() {

    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input placeholder='Search for Artists, Songs or etc.' type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="HK" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header