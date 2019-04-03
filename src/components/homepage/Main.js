import React from 'react';

function Main(){
    return (
        <main style={styles}>This is the Main content</main>
    )
}
const styles = {   
    backgroundColor: 'black',
    color:'white',
    boxShadow:"1px 3px 5px #9E9E9E",
    fontSize: 30,
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '1 / -1'
}
export default Main;