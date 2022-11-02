import React from 'react'
import { TextField } from '@mui/material';

const login = () => {
}

return (
    <div className='login-container'>
        <h1 style={{ color: "red" }}>Not Implemented Yet</h1>
        <h1>Login</h1>
        <form className='login-form' onSubmit={handleSubmit(submitHanlder)}>

            <TextField variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}
            >
            </TextField>

            <TextField variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "email" }}
            >
            </TextField>
            <button className='btn' type='submit'>Anmelden</button>
        </form>
    </div>
)


export default login