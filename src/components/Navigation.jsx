import React from 'react';
import '../styles.css';
function Navigation(){
    return(
<nav className="nav-bar">
    <ul className="nav-links">
        <li><a href="#live">Live</a></li>
        <li><a href="#Mathes">Mathes</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#series">Series</a></li>
        <li><a href="#video">Videos</a></li>
    </ul>
</nav>

    )
}

export default Navigation;