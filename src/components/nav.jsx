import React from 'react'
import logo from '../images/logo.png'
import logo2 from '../images/logo-media.png'
import Menu from './menu'
import { Link } from 'react-router-dom'


export default props =>

    <div className="nav">
        <Link to='/'>
            <a><img src={logo} alt='logo' className='img'></img></a>
        </Link>
        <Link to='/'>
            <a href="/"><img src={logo2} alt='logo' className='img2'></img></a>
        </Link>
        <Link to='/login'>
            <li className='mediaLogIn'>LOG IN</li>
        </Link>
        <Menu />
    </div>

