import React from 'react'

function Header(){
    return(
     <header className='site-header'>
        <div className='logo'>
            Cricbuzz Clone
        </div>
        <div className="header-right">
            <input type="text" placeholder="Search" className="search-box"/>
        </div>
     </header>
    );
}
export default Header;