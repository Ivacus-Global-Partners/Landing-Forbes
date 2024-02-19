import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        minWidth: '200px',
        padding: '10px 7px 7px',
        boxSizing: 'border-box',
        height: 'fit-content',
        '&:focus-within': {
            backgroundColor: 'white',
        },
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
        color: 'red',
        fontSize: '14px',
        marginTop: '5px'
    }
}));

const Input = ({ name, value, label, id, type, select, children, prefix, required, onChange, checked, errors, inputStyle, labelStyle, style }:
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
                        <input style={inputStyle} type="text" id="prefix" name="prefix" value={prefix} onChange={onChange} />
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
        <div className={classes.input} style={style}>
            {type !== 'checkbox' && labelTag}
            {input}
            {type === 'checkbox' && labelTag}
            {errors && errors.length > 0 && errors.map((error, index) => (
                <p className={classes.error} key={index}>{error}</p>
            ))}
        </div>
    );
};

export default Input;
