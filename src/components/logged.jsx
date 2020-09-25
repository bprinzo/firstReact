import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default () => {

    const [logOut, setlogOut] = useState(false);


    const handleClick = () => (
        setlogOut(!logOut),
        console.log(logOut),
        (logOut ? false : (window.localStorage.removeItem('token'), window.location.reload()))
    )

    return (
        <div className='logOut'>
            <h1>You're Logged</h1>
            <Link to='/body'>
                <button>Search</button>
            </Link>
            <button onClick={handleClick}>Log Out</button>
        </div>
    );
}
