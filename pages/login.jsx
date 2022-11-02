import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';


const login = () => {

    const { user, login } = useStateContext();
    console.log(user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='login-container'>
            <h1>Anmelden</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <TextField onChange={(e) => setEmail(e.target.value)} variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}></TextField>
                <TextField onChange={(e) => setPassword(e.target.value)} variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "password" }}></TextField>
                <button className='btn' type='submit'>Anmelden</button>
            </form>
        </div>
    )

}
export default login