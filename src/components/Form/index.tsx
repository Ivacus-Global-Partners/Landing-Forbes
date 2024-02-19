import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Input from '../Input';
import countries from '../../resources/data/countries';

interface Values {
    name: string,
    lastName: string,
    email: string,
    program: string,
    country: string,
    prefix: string,
    phone: string
}

interface Errors {
    name: [],
    lastName: [],
    email: [],
    program: [],
    country: [],
    prefix: [],
    phone: []
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#DBD9D9',
        padding: '28px 20px',
        boxSizing: 'border-box',
        rowGap: '25px',
        flex: '1',
        '& h1': {
            margin: '0',
            color: '#8F0025',
            fontSize: '2em',
            fontFamily: "'Inter', sans-serif",
            padding: '0 7px',
            fontWeight: '600',
            lineHeignt: '1.45',
        },
        '& form': {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: '15px'
        }
    }
}));

const Form = () => {
    const [values, setValues] = useState<Values>({
        name: '',
        lastName: '',
        email: '',
        program: '0',
        country: '+34',
        prefix: '',
        phone: ''
    })
    const [errors, setErrors] = useState<Errors>({
        name: [],
        lastName: [],
        email: [],
        program: [],
        country: [],
        prefix: [],
        phone: []
    });
    const classes = useStyles();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
        setValues({ ...values, [name]: value });
    }

    return (
        <div className={classes.container}>
            <h1>No esperes, actúa.</h1>
            <form>
                <Input
                    required
                    name="name"
                    value={values.name}
                    label="Nombre"
                    type="text"
                    onChange={handleChange}
                    errors={errors.name}
                />
                <Input
                    required
                    name="lastName"
                    value={values.lastName}
                    label="Apellidos"
                    type="text"
                    onChange={handleChange}
                    errors={errors.lastName}
                />
                <Input
                    required
                    name="email"
                    value={values.email}
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    errors={errors.email}
                />
                <Input
                    required
                    name="program"
                    value={values.program}
                    label="Programa de interés"
                    select
                    onChange={handleChange}
                    errors={errors.program}
                >
                    <option value="0">Seleccionar</option>
                    <option value="1">Opción 1</option>
                    <option value="2">Opción 2</option>
                    <option value="3">Opción 3</option>
                </Input>
                <Input
                    required
                    name="country"
                    value={values.country}
                    label="País de residencia"
                    select
                    onChange={handleChange}
                    errors={errors.country}
                >
                    <option value=''>Seleccionar</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.prefix}>{country.name}</option>
                    ))}
                </Input>
                <Input
                    required
                    name="phone"
                    prefix={values.prefix}
                    value={values.phone}
                    label="Número de teléfono"
                    type="phone"
                    onChange={handleChange}
                    errors={errors.phone}
                />
            </form>
        </div>
    );
};

export default Form;
