import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Input from '../Input';
import countries from '../../resources/data/countries';

const programs = [
    {
        name: 'Customer Experience en la excelencia del lujo',
        productId: '0xe88c9e',
        formId: '0xf1bef6',
        href: 'https://sagardoyschool.com/archivos/customer-experience-en-la-excelencia-del-lujo.pdf',
        download: 'customer-experience-en-la-excelencia-del-lujo.pdf',
        redirect: 'https://sagardoyschool.com/thank-you/customer-experience-en-la-excelencia-del-lujo/',
    },
    {
        name: 'El valor de la diversidad; Diversidad, Equidad, Inclusión',
        productId: '0xe88cb8',
        formId: '0xf1bee9',
        href: 'https://sagardoyschool.com/archivos/programa-el-valor-de-la-diversidad.pdf',
        download: 'programa-el-valor-de-la-diversidad.pdf',
        redirect: 'https://sagardoyschool.com/thank-you/programa-el-valor-de-la-diversidad/',
    },
    {
        name: 'Inteligencia Artificial: Transformando negocios e industrias',
        productId: '0xe88ca5',
        formId: '0xf1bed7',
        href: 'https://sagardoyschool.com/archivos/inteligencia-artificial-transformando-industrias-y-negocios.pdf',
        download: 'inteligencia-artificial-transformando-industrias-y-negocios.pdf',
        redirect: 'https://sagardoyschool.com/thank-you/inteligencia-artificial-transformando-industrias-y-negocios/',
    },
    {
        name: 'Leadership Essentials: Impulsando tu trayectoria',
        productId: '0xe88c96',
        formId: '0xf1bef9',
        href: 'https://sagardoyschool.com/archivos/leadership-essentials-impulsando-tu-trayectoria.pdf',
        download: 'leadership-essentials-impulsando-tu-trayectoria.pdf',
        redirect: 'https://sagardoyschool.com/thank-you/leadership-essentials-impulsando-tu-trayectoria/',
    },
    {
        name: 'Sostenibilidad Corporativa: Claves para el futuro',
        productId: '0xe88cac',
        formId: '0xf1bef0',
        href: 'https://sagardoyschool.com/archivos/sostenibilidad-corporativa-claves-para-el-futuro.pdf',
        download: 'sostenibilidad-corporativa-claves-para-el-futuro.pdf',
        redirect: 'https://sagardoyschool.com/thank-you/sostenibilidad-corporativa-claves-para-el-futuro/',
    },
    {
        name: 'In Company',
        prouctId: '0',
        formId: '',
        href: '',
        download: '',
        redirect: '',
    }
]

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
    name?: string[],
    lastName?: string[],
    email?: string[],
    program?: string[],
    country?: string[],
    prefix?: string[],
    phone?: string[],
    acceptedPolicy?: string[],
    keepContact?: string[]
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
        position: 'relative',
        overflow: 'hidden',
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
            gap: '15px',
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column',
            }
        }
    },
    whatsappContainer: {
        width: '100%',
        minWidth: '200px',
        padding: '0 35px 0 7px',
        flex: 'auto',
        gridColumn: 'span 2',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        }
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
        gridColumn: 'span 2',
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
        gridColumn: 'span 2',
        '&:hover': {
            backgroundColor: '#29000B',
        },
    },
    notification: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#DC2626',
        color: 'white',
        display: 'flex',
        top: 0,
        left: 0,
        transition: 'top 0.5s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            gap: '10px',
        },
        '& a': {
            backgroundColor: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            color: 'black',
            textAlign: 'center',
        },
        '& p': {
            margin: 0,
            fontSize: '15px',
        },
        '& span': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            padding: '4px 10px',
            fontWeight: 'bold',
            fontSize: '14px',
        }
    },
    hidden: {
        top: -100,
    },
    fixed: {
        backgroundColor: '#CAF9CC',
        '& p': {
            color: '#6D857D',
        },
        '& span': {
            backgroundColor: '#18BD5B',
            color: 'white',
            marginRight: '5px',
        },
        '& button': {
            backgroundColor: '#18BD5B',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
        }
    }
}));

const Form = () => {
    const [values, setValues] = useState<Values>({
        name: '',
        lastName: '',
        email: '',
        program: '',
        country: '+34',
        prefix: '+34',
        phone: '',
        acceptedPolicy: false,
        keepContact: false
    })
    const [openFixed, setOpenFixed] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const classes = useStyles();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const checked = e.target.type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : false;
        setErrors((current) => {
            const newErrors: { [key: string]: string[] | undefined } = { ...current };
            delete newErrors[name];
            if (Object.keys(current).includes(name) && Object.keys(newErrors).length <= 0) setOpenFixed(true);
            return newErrors;
        });
        // Si el valor no es un número y name es phone, no permitir que se escriba
        if (isNaN(+value) && name === 'phone') {
            setErrors({ ...errors, [name]: ['Debe ser un número'] })
            return
        };
        setValues({ ...values, [name]: e.target.type === 'checkbox' ? checked : value });
    }

    const validateInput = (e: React.FormEvent<HTMLInputElement>) => {
        setOpenFixed(false)
        const { name, value } = e.currentTarget;
        if (value === '') {
            setErrors({ ...errors, [name]: ['Este campo es obligatorio'] })
        }
        else if (name === 'email' && !value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setErrors({ ...errors, [name]: ['Introduzca una dirección e-mail válida'] })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Inicializar un objeto para almacenar los errores
        let newErrors: Errors = errors;

        if (values.name === '') {
            newErrors = { ...newErrors, name: ['Este campo es obligatorio'] };
        }
        if (values.lastName === '') {
            newErrors = { ...newErrors, lastName: ['Este campo es obligatorio'] };
        }
        if (values.email === '') {
            newErrors = { ...newErrors, email: ['Este campo es obligatorio'] };
        }
        if (values.program === '') {
            newErrors = { ...newErrors, program: ['Este campo es obligatorio'] };
        }
        if (values.country === '') {
            newErrors = { ...newErrors, country: ['Este campo es obligatorio'] };
        }
        if (values.phone === '') {
            newErrors = { ...newErrors, phone: ['Este campo es obligatorio'] };
        }
        if (!values.acceptedPolicy) {
            newErrors = { ...newErrors, acceptedPolicy: ['Este campo es obligatorio'] };
        }
        if (!values.keepContact) {
            newErrors = { ...newErrors, keepContact: ['Este campo es obligatorio'] };
        }

        const program = programs.find((program) => program.productId === values.program);

        if (!program) {
            newErrors = { ...newErrors, program: ['Programa no encontrado'] };
        }

        // Actualizar los errores solo si hay errores nuevos
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }

        if (Object.keys(errors).length === 0 && Object.keys(newErrors).length === 0 && program) {
            var myHeaders = new Headers();
            myHeaders.append("fx", program.formId); // formId
            myHeaders.append("content-type", "application/json");

            var raw = JSON.stringify({
                name: values.name,
                lastName: values.lastName,
                email: values.email,
                phone: `${values.prefix} ${values.phone}`,
                prefix: values.prefix,
                "privacy-police": values.acceptedPolicy,
                productId: program.productId, // productId
                formId: program.formId,
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
            };

            fetch("https://api.ivacus.com/x/deliverForm", requestOptions)
                .then((response) => response.text())
                .then((result) => {

                    setValues({
                        name: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        prefix: '0',
                        program: '',
                        country: '',
                        acceptedPolicy: false,
                        keepContact: false
                    });
                    setErrors({});

                    const downloadLink = document.createElement("a");
                    downloadLink.href = program.href;
                    downloadLink.download = program.download;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    if (!program.redirect) return;

                    const redirectLink = document.createElement("a");
                    redirectLink.href = program.redirect;
                    redirectLink.click();
                })
                .catch((error) => console.log("error>>>>>", error));
        }

    }

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string, offset: number = 0) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element instanceof HTMLElement) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            window.scrollTo({
                top: rect.top + scrollTop - offset,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.notification} ${Object.keys(errors).length <= 0 ? classes.hidden : ''}`}>
                <p>Hay <span>{Object.keys(errors).length}</span> {`errores en esta página. Favor corregirlo${Object.keys(errors).length > 1 ? 's' : ''} antes de continuar.`}</p>
                <a href="#error" onClick={(e) => smoothScroll(e, 'error', 30)}>Ver Errores</a>
            </div>
            <div className={`${classes.notification} ${classes.fixed} ${!openFixed ? classes.hidden : ''}`}>
                <p><span>✓</span>¡Bien hecho! Todos los errores resueltos.</p>
                <button onClick={() => setOpenFixed(false)}>Listo</button>
            </div>
            <h1>No esperes, actúa.</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    required
                    id={errors.name ? 'error' : ''}
                    name="name"
                    value={values.name}
                    label="Nombre"
                    type="text"
                    onChange={handleChange}
                    errors={errors.name}
                    onBlur={validateInput}
                />
                <Input
                    required
                    id={errors.lastName ? 'error' : ''}
                    name="lastName"
                    value={values.lastName}
                    label="Apellidos"
                    type="text"
                    onChange={handleChange}
                    errors={errors.lastName}
                    onBlur={validateInput}
                />
                <Input
                    required
                    id={errors.email ? 'error' : ''}
                    name="email"
                    value={values.email}
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    errors={errors.email}
                    onBlur={validateInput}
                />
                <Input
                    required
                    id={errors.program ? 'error' : ''}
                    name="program"
                    value={values.program}
                    label="Programa de interés"
                    select
                    onChange={handleChange}
                    errors={errors.program}
                    inputStyle={{ fontWeight: values.program === '' ? '100' : '' }}
                    onBlur={validateInput}
                >
                    <option value="">Seleccione</option>
                    {programs.map((program, index) => (
                        <option key={index} value={program.productId}>{program.name}</option>
                    ))}
                </Input>
                <Input
                    required
                    id={errors.country ? 'error' : ''}
                    name="country"
                    value={values.country}
                    label="País de residencia"
                    select
                    onChange={handleChange}
                    errors={errors.country}
                    onBlur={validateInput}
                >
                    <option value=''>Seleccionar</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.prefix}>{country.name}</option>
                    ))}
                </Input>
                <Input
                    required
                    id={errors.phone ? 'error' : ''}
                    name="phone"
                    prefix={values.prefix}
                    value={values.phone}
                    label="Número de teléfono"
                    type="phone"
                    onChange={handleChange}
                    errors={errors.phone}
                    onBlur={validateInput}
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
                    id={errors.acceptedPolicy ? 'error' : ''}
                    name="acceptedPolicy"
                    value={values.acceptedPolicy.toString()}
                    label={
                        <>SpainMedia y Grupo Sagardoy atenderán tu solicitud de información sobre nuestros servicios formativos. Para esta finalidad y las siguientes, puedes oponerte y acceder, rectificar o suprimir tus datos y ejercitar otros derechos como se indica en nuestra <a href="https://forbes.es/politica-de-privacidad/" target='_blank' rel="noreferrer">Política de privacidad </a>.
                        </>}
                    type="checkbox"
                    checked={values.acceptedPolicy}
                    onChange={handleChange}
                    errors={errors.acceptedPolicy}
                    style={{ flex: 'auto', display: 'inline', gridColumn: 'span 2' }}
                    labelStyle={{ color: '#6d6d6d', fontWeight: 100 }}
                    inputStyle={{ margin: 0, marginRight: '10px', cursor: 'pointer' }}
                    backgroundHover={false}
                />
                <Input
                    required
                    id={errors.keepContact ? 'error' : ''}
                    name="keepContact"
                    value={values.keepContact.toString()}
                    label="Deseo mantenerme informado por email y/o teléfono sobre novedades informativas de SpainMedia y Grupo Sagardoy."
                    type="checkbox"
                    checked={values.keepContact}
                    onChange={handleChange}
                    errors={errors.keepContact}
                    style={{ flex: 'auto', display: 'inline', gridColumn: 'span 2' }}
                    labelStyle={{ color: '#6d6d6d', fontWeight: 100 }}
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
