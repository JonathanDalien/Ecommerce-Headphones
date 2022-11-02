import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../src/firebase-config"
import { useStateContext } from '../context/StateContext'
import { useRouter } from 'next/router';

const registerPage = () => {

    const { user, signIn } = useStateContext();
    console.log(user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault()
        if (password === confPassword) {
            try {
                await signIn(email, password)
                router.push("/")
            } catch (error) {
                console.log(error)
                return
            }
        }
    }




    return (
        <div className='login-container'>
            <h1>Registrieren</h1>
            <form className='login-form' onSubmit={handleRegister}>
                <TextField onChange={(e) => setEmail(e.target.value)} variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}></TextField>
                <TextField onChange={(e) => setPassword(e.target.value)} variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "password" }}></TextField>
                <TextField onChange={(e) => setConfPassword(e.target.value)} variant='outlined' fullWidth id='confPassword' label="Passwort bestätigen" inputProps={{ type: "password" }}></TextField>
                <button className='btn' type='submit'>Registrieren</button>
            </form>
        </div>
    )
}

export default registerPage