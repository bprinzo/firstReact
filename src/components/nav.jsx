import React from 'react'
import logo from '../images/logo.png'
import logo2 from '../images/logo-media.png'
import Menu from './menu'


export default props =>

    <div className="nav">
        <a><img src={logo} alt='logo' className='img'></img></a>
        <a><img src={logo2} alt='logo' className='img2'></img></a>
        <Menu></Menu>
    </div>

