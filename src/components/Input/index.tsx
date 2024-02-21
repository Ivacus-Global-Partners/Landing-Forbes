import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import countries from '../../resources/data/countries';

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        minWidth: '200px',
        [theme.breakpoints.down('md')]: {
            minWidth: '300px',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '200px',
        },
        padding: '10px 7px 7px',
        boxSizing: 'border-box',
        height: 'fit-content',
        '& label': {
            color: 'black',
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif',
            fontSize: '15px',
            marginBottom: '8px',
        },
        '& input': {
            border: '1px solid #8f0025',
            fontFamily: 'inherit',
            padding: '5px',
            fontSize: '1em',
            '&:hover': {
                outline: '2px solid #C8A3AC',
                boxShadow: 'inset 0 0 0 1px #8f0025',
            },
            '&:focus': {
                outline: '2px solid #C8A3AC',
                boxShadow: 'inset 0 0 0 1px #8f0025',
            }
        },
        '& select': {
            border: '1px solid #8f0025',
            fontFamily: 'inherit',
            padding: '5px',
            fontSize: '1em',
            '&:hover': {
                outline: '2px solid #C8A3AC',
                boxShadow: 'inset 0 0 0 1px #8f0025',
            },
            '&:focus': {
                outline: '2px solid #C8A3AC',
                boxShadow: 'inset 0 0 0 1px #8f0025',
            }
        },
    },
    inputFocused: {
        '&:focus-within': {
            backgroundColor: 'white',
        },
    },
    phoneContainer: {
        display: 'flex',
        gap: '5px',
    },
    phoneInput: {
        display: 'flex',
        flexDirection: 'column',
        '& p': {
            fontSize: '0.75em',
            margin: '11px 0 0 7px',
            color: '#000'
        }
    },
    error: {
        color: '#fff',
        fontSize: '0.75em',
        marginTop: '10px',
        backgroundColor: '#F23A3C',
        width: 'fit-content',
        padding: '2px 5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    errorStyle: {
        backgroundColor: '#FFD6D6',
    }
}));

const Input = ({ name, value, label, id, type, select, children, prefix, required, onChange, checked, errors, inputStyle, labelStyle, style, backgroundHover }:
    {
        name: string,
        value: string,
        label: string | React.ReactNode,
        id?: string,
        type?: string,
        select?: boolean,
        children?: React.ReactNode,
        prefix?: string,
        required?: boolean,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
        checked?: boolean,
        errors?: Array<string>,
        inputStyle?: React.CSSProperties,
        labelStyle?: React.CSSProperties,
        style?: React.CSSProperties,
        backgroundHover?: boolean
    }) => {
    const classes = useStyles();

    const labelTag = required
        ? (<label style={labelStyle} htmlFor={id}>{label}<span style={{ color: "#dc2626" }}> *</span></label>)
        : <label style={labelStyle} htmlFor={id}>{label}</label>;

    const input = select
        ? (
            <select id={id} name={name} value={value} onChange={onChange}>
                {children}
            </select>
        )
        : type === 'phone'
            ? (
                <div className={classes.phoneContainer}>
                    <div style={{ width: '40%' }} className={classes.phoneInput}>
                        <select style={{ width: '100%' }} id="prefix" name="prefix" value={prefix} onChange={onChange}>
                            {countries.map((country, index) => (
                                <option key={index} value={country.prefix}>{`${country.prefix} (${country.name})`}</option>
                            ))}
                        </select>
                        <p>Código país</p>
                    </div>
                    <div style={{ width: '60%' }} className={classes.phoneInput}>
                        <input style={inputStyle} type="tel" id={id} name={name} value={value} onChange={onChange} />
                        <p>Número de teléfono</p>
                    </div>
                </div >
            )
            : (
                <input style={inputStyle} type={type} id={id} name={name} value={value} checked={type === 'checkbox' && checked} onChange={onChange} />
            )

    return (
        <div className={`${classes.input} ${(errors && errors.length > 0) ? classes.errorStyle : ''} ${backgroundHover === undefined || backgroundHover === true ? classes.inputFocused : ''}`} style={style}>
            {type !== 'checkbox' && labelTag}
            {input}
            {type === 'checkbox' && labelTag}
            {errors && errors.length > 0 && errors.map((error, index) => (
                <p className={classes.error} key={index}>
                    <img style={{ width: '0.9em' }} src="https://cdn.jotfor.ms/images/exclamation-octagon.png" alt="error" />
                    {error}</p>
            ))}
        </div>
    );
};

export default Input;
