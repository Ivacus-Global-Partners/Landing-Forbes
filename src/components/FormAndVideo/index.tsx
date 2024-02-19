import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Form from '../Form';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        columnGap: '30px',
        '& div': {
            flex: 1
        },
    },
    video: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '80px',
        '& img': {
            width: '100%',
        },
        '& iframe': {
            width: '100%',
        }
    }
}));

const FormAndVideo = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Form />
            <div className={classes.video}>
                <iframe width="560" height="347" src="https://www.youtube.com/embed/BZUu3X-oja4?si=Swmtk5Acrtnc1B5B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <img src="https://forbes.es/wp-content/uploads/2024/02/Flechas_Video-1200x460.png" alt="arrows" />
            </div>
        </div>
    );
};

export default FormAndVideo;
