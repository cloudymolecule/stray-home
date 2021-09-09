import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className='nav'>
                    <div className='nav-container container'>
                        <Link onClick={closeMobileMenu} to='/' className='nav-logo'>
                            <div className='nav-name'>Stray Home</div>
                        </Link>
                        <div onClick={handleClick} className='menu-icon'>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/'>HOME</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/cat-adoption'>CAT ADOPTION</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/dog-adoption'>DOG ADOPTION</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/rehome'>REHOME</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/shelters'>SHELTERS</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/account'>ACCOUNT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Nav