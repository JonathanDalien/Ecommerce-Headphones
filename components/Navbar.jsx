import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai";
import Cart from './Cart';
import { useStateContext } from '../context/StateContext'
import { useRouter } from 'next/router';


const Navbar = () => {

    const { setShowCart, showCart, totalQuantity, user, logout } = useStateContext();
    const router = useRouter();


    return (
        <div className='navbar-container'>
            <div>
                <p className='logo'>
                    <Link href="/">JD Headphones Store</Link>
                </p>
            </div>
            <div className='navbar-section-right'>
                {user ? (<Link legacyBehavior={false} href="/login" onClick={() => {
                    logout()
                }} passHref>Abmelden</Link>) : (<><Link href="login" passHref>Anmelden</Link> <Link href="register">Registrieren</Link></>)}
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