import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai";
import Cart from './Cart';
import { useStateContext } from '../context/StateContext'
import { auth } from "../src/firebase-config"


const Navbar = () => {

    const { setShowCart, showCart, totalQuantity, user, logout } = useStateContext();


    return (
        <div className='navbar-container'>
            <div>
                <p className='logo'>
                    <Link href="/">JD Headphones Store</Link>
                </p>
            </div>

            <div>
                {user ? (<><p>Willkommen Zurück,<span style={{ textTransform: "capitalize" }}> {user?.displayName}</span></p></>) : ""}
            </div>
            <div className='navbar-section-right'>
                {user ? (<Link legacyBehavior={false} href="/login" onClick={() => {
                    logout()
                }} >Abmelden</Link>) : (<><Link href="login">Anmelden</Link> <Link href="register">Registrieren</Link></>)}
                <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>{totalQuantity}</span>
                </button>
                {showCart && <Cart />}
            </div>




        </div>
    )
}

export default Navbar