import React from 'react';


function Footer() {
    
    const date = new Date();
    const year = date.getFullYear(); 

    return (
        <footer>
            <p>Created with <span role="img" aria-label="heart-emoji">💜</span> by Nadia Abby {year}</p>  
        </footer>
    );
}

export default Footer; 