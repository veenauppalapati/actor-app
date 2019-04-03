import React from 'react';

function Footer(){
    return (
        <footer style={styles}>This is the homepage Footer</footer>
    )
}

const styles = {   
    backgroundColor: 'white',
    color:'black',
    boxShadow:"1px 3px 5px #9E9E9E",
    fontSize: 30,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '1 / -1'
}

export default Footer;