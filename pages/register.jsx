import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { useStateContext } from '../context/StateContext'

const Register = () => {

    const { user, signIn } = useStateContext();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault()
        if (password === confPassword) {
            try {
                await signIn(email, password, name)
            } catch (error) {
                return
            }
        }
    }




    return (
        <div className='login-container'>
            <h1>Registrieren</h1>
            <form className='login-form' onSubmit={handleRegister}>
                <TextField onChange={(e) => setEmail(e.target.value)} variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}></TextField>
                <TextField onChange={(e) => setName(e.target.value)} variant='outlined' fullWidth id='name' label="Displayname" inputProps={{ type: "string" }}></TextField>
                <TextField onChange={(e) => setPassword(e.target.value)} variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "password" }}></TextField>
                <TextField onChange={(e) => setConfPassword(e.target.value)} variant='outlined' fullWidth id='confPassword' label="Passwort bestätigen" inputProps={{ type: "password" }}></TextField>
                <button className='btn' type='submit'>Registrieren</button>
            </form>
        </div>
    )
}

export default Register