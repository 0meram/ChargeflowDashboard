import React from 'react'
import { ReactComponent as Avatar } from '../icons/avatar.svg';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Bell } from '../icons/bell.svg';
import { ReactComponent as Search } from '../icons/search.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header_search"><Search />Search</div>
            <div className="header_icons">
                <div className="header_icon"><Avatar /></div>
                <div className="header_icon"><Info /></div>
                <div className="header_icon"><Bell /></div>
            </div>
        </header>
    )
}

export default Header