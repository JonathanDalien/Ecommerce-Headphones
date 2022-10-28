import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 Jonathan Dalien All rights reserved</p>
            <p className='icons'>
                <Link className='github-button' href="https://www.youtube.com/feed/subscriptions">
                    <AiFillGithub />
                </Link>
            </p>
        </div>
    )
}

export default Footer