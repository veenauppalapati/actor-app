import React from 'react';
import Header from './homepage/Header'
import Main from './homepage/Main'
import Footer from './homepage/Footer'

function HomePage () {
    return(
        <div style={styles}>
            <Header />
            <Main />
            <Footer />
        </div>        
    )
}

const styles={
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '20vh auto 20vh',
    gridGap: '5px'
}

export default HomePage;