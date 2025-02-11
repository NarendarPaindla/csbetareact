import React from 'react';
function Footer(){
    return(
<footer className="site-footer">
    <p>&copy; {new Date().getFullYear()} {new Date().getDate()} {new Date().getDay()} {new Date().getMonth()} CricBuzz Clone. All rights reserved.</p>
</footer>

    )
}

export default Footer;