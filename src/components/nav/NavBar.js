import CartWidget from "./cartWidget/CartWidget";
import { Link } from "react-router-dom";
import Categories from "./categories/Categories";
import { useState } from "react";
import { Slant as Hamburger } from 'hamburger-react'


const NavBar = () => {



    const [navbarOpen, setNavbarOpen] = useState(false)


    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }


    return (
        <>
            <header>
                <nav className="navBar">
                    <Link to="/shop">
                        <h1>the<span className="logoFootball">Football</span>Store.</h1>
                    </Link>
                    
                    <button id="navBarToggleButton" onClick={handleToggle}><Hamburger></Hamburger></button>
                
                    {navbarOpen ? <Categories /> : <></> }

                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default NavBar;