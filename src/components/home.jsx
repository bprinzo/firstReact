import React from 'react'
import {Link} from 'react-router-dom'

export default props =>(
    <div className='wrap'>
    <h1 className='home'>WELCOME!</h1>
    <Link to='/body'>
    <button className='animeSearch'>Anime Search</button>
    </Link>
    </div>
)