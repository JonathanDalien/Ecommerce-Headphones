import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { TextField } from '@mui/material';

const login = () => {

    const { handleSubmit, control, formState: { errors } } = useForm();

    const submitHanlder = async (email, password) => {

    }

    return (
        <div className='login-container'>
            <h1 style={{ color: "red" }}>Not Implemented Yet</h1>
            <h1>Register</h1>
            <form className='login-form' onSubmit={handleSubmit(submitHanlder)}>
                <Controller name='name' control={control} defaultValue="" rules={{ required: true }} render={({ field }) => (
                    <TextField variant='outlined' fullWidth id='name' label="Name" inputProps={{ type: "text" }}
                        error={Boolean(errors.email)}>
                    </TextField>
                )}>
                </Controller>
                <Controller name='email' control={control} defaultValue="" rules={{ required: true }} render={({ field }) => (
                    <TextField variant='outlined' fullWidth id='email' label="Email" inputProps={{ type: "email" }}
                        error={Boolean(errors.email)}>
                    </TextField>
                )}>
                </Controller>
                <Controller name='password' control={control} defaultValue="" rules={{ required: true }} render={({ field }) => (
                    <TextField variant='outlined' fullWidth id='password' label="Passwort" inputProps={{ type: "password" }}
                        error={Boolean(errors.password)}>
                    </TextField>
                )}></Controller>
                <Controller name='confPassword' control={control} defaultValue="" rules={{ required: true }} render={({ field }) => (
                    <TextField variant='outlined' fullWidth id='confPassword' label="Passwort bestätigen" inputProps={{ type: "password" }}
                        error={Boolean(errors.password)}>
                    </TextField>
                )}></Controller>
                <button className='btn' type='submit'>Registrieren</button>
            </form>
        </div>
    )
}

export default login