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
    phone: string,
    acceptedPolicy: boolean,
    keepContact: boolean
}

interface Errors {
    name: string[],
    lastName: string[],
    email: string[],
    program: string[],
    country: string[],
    prefix: string[],
    phone: string[],
    acceptedPolicy: string[],
    keepContact: string[]
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
    },
    whatsappContainer: {
        width: '100%',
        minWidth: '200px',
        padding: '0 35px 0 7px',
        flex: 'auto',
    },
    whatsapp: {
        textDecoration: 'none',
        background: '#5ACC70',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        width: '46%',
        padding: '10px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#2DBC29',
        },
        '& img': {
            width: '26px',
        },
        [theme.breakpoints.down('md')]: {
            width: '48%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    divider: {
        width: '104%',
        border: '0.5px solid #FFF',
        margin: '0 -10px',
    },
    submit: {
        width: '100%',
        backgroundColor: '#8F0025',
        color: 'white',
        cursor: 'pointer',
        border: 'none',
        textTransform: 'uppercase',
        fontSize: '18px',
        padding: '20px 0',
        marginBottom: '10px',
        '&:hover': {
            backgroundColor: '#29000B',
        },
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
        phone: '',
        acceptedPolicy: false,
        keepContact: false
    })
    const [errors, setErrors] = useState<Errors>({
        name: [],
        lastName: [],
        email: [],
        program: [],
        country: [],
        prefix: [],
        phone: [],
        acceptedPolicy: [],
        keepContact: []
    });
    const classes = useStyles();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const checked = e.target.type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : false;
        setErrors({ ...errors, [name]: [] });
        setValues({ ...values, [name]: e.target.type === 'checkbox' ? checked : value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Inicializar un objeto para almacenar los errores
        let newErrors: Errors = errors;

        if (values.name === '') {
            newErrors = { ...newErrors, name: ['El nombre es obligatorio'] };
        }
        if (values.lastName === '') {
            newErrors = { ...newErrors, lastName: ['El apellido es obligatorio'] };
        }
        if (values.email === '') {
            newErrors = { ...newErrors, email: ['El email es obligatorio'] };
        }
        if (values.program === '0') {
            newErrors = { ...newErrors, program: ['El programa es obligatorio'] };
        }
        if (values.country === '') {
            newErrors = { ...newErrors, country: ['El país es obligatorio'] };
        }
        if (values.phone === '') {
            newErrors = { ...newErrors, phone: ['El teléfono es obligatorio'] };
        }
        if (!values.acceptedPolicy) {
            newErrors = { ...newErrors, acceptedPolicy: ['Debes aceptar la política de privacidad'] };
        }
        if (!values.keepContact) {
            newErrors = { ...newErrors, keepContact: ['Este campo es obligatorio'] };
        }

        // Actualizar los errores solo si hay errores nuevos
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Formulario enviado');
        }
    }


    return (
        <div className={classes.container}>
            <h1>No esperes, actúa.</h1>
            <form onSubmit={handleSubmit}>
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
                <div className={classes.whatsappContainer}>
                    <a className={classes.whatsapp} href="acceptedPolicy" target="_blank" rel="noreferrer">
                        <img src="https://app-widgets.jotform.io/whatsAppButton/img/wapp.svg" alt="whatsapp-logo" />
                        Contacta por whatsapp
                    </a>
                </div>
                <br />
                <Input
                    required
                    name="acceptedPolicy"
                    value={values.acceptedPolicy.toString()}
                    label={
                        <>SpainMedia y Grupo Sagardoy atenderán tu solicitud de información sobre nuestros servicios formativos. Para esta finalidad y las siguientes, puedes oponerte y acceder, rectificar o suprimir tus datos y ejercitar otros derechos como se indica en nuestra <a href="https://forbes.es/politica-de-privacidad/" target='_blank' rel="noreferrer">Política de privacidad </a>.
                        </>}
                    type="checkbox"
                    checked={values.acceptedPolicy}
                    onChange={handleChange}
                    errors={errors.acceptedPolicy}
                    style={{ flex: 'auto', display: 'inline' }}
                    labelStyle={{ color: '#6d6d6d' }}
                    inputStyle={{ margin: 0, marginRight: '10px', cursor: 'pointer' }}
                    backgroundHover={false}
                />
                <Input
                    required
                    name="keepContact"
                    value={values.keepContact.toString()}
                    label="Deseo mantenerme informado por email y/o teléfono sobre novedades informativas de SpainMedia y Grupo Sagardoy."
                    type="checkbox"
                    checked={values.keepContact}
                    onChange={handleChange}
                    errors={errors.keepContact}
                    style={{ flex: 'auto', display: 'inline' }}
                    labelStyle={{ color: '#6d6d6d' }}
                    inputStyle={{ margin: 0, marginRight: '10px', cursor: 'pointer' }}
                    backgroundHover={false}
                />
                <hr className={classes.divider} />
                <button className={classes.submit} type="submit">Solicitar Información</button>
            </form>
        </div>
    );
};

export default Form;
