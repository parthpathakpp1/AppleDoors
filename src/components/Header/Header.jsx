import React, { useState } from 'react'
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler'
import {FiLogIn} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className='container'>
                <img src='./logo.png' alt='logo' className='logo' width={150} />
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >

                    <div className='flexCenter h-menu'
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Login/Signup</a>
                        <a href="">Profile </a>
                        <a href="">Apple Studio</a>
                    </div>
                </OutsideClickHandler>
                <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />

                </div>
            </div>

        </section>
    )
}

export default Header