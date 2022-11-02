import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {

    const { user } = useStateContext();
    const router = useRouter();

    useEffect(() => {
        if (user)
            router.push("/")
    }, [router, user])

    return (
        <>{!user ? children : null}</>
    )
}

export default ProtectedRoute