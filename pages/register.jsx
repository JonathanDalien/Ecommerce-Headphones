import React from 'react'
import { TextField } from '@mui/material';

const login = () => {


    return (
        <div className='login-container'>
            <h1 style={{ color: "red" }}>Not Implemented Yet</h1>
            <h1>Register</h1>
            <form className='login-form'>
                <TextField variant='outlined' fullWidth id='name' label="Name" inputProps={{ type: "text" }}>
                </TextField>
                <TextField variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}>
                </TextField>
                <TextField variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "password" }}>
                </TextField>


                <TextField variant='outlined' fullWidth id='confPassword' label="Passwort bestätigen" inputProps={{ type: "password" }}
                >
                </TextField>
                <button className='btn' type='submit'>Registrieren</button>
            </form>
        </div>
    )
}

export default login