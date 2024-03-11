import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Form from '../Form';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        columnGap: '30px',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            rowGap: '30px',
        },
    },
    video: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '50px',
        width: '51%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        '& img': {
            width: '100%',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        '& iframe': {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                height: '55vw',
            },
        },
    }
}));

const FormAndVideo = ({ id }: { id?: string }) => {
    const classes = useStyles();

    return (
        <div className={classes.container} id={id}>
            <Form />
            <div className={classes.video}>
                <iframe width="560" height="369" src="https://www.youtube.com/embed/yKzSsh16vMY" title="Forbes Sagardoy Business School" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <img src="https://forbes.es/wp-content/uploads/2024/02/Flechas_Video-1200x460.png" alt="arrows" />
            </div>
        </div>
    );
};

export default FormAndVideo;
