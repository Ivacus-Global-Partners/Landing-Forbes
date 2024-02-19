import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import Form from '../Form';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        columnGap: '30px',
        '& iframe': {
            flex: 1
        },
        '& div': {
            flex: 1
        },
    }
}));

const FormAndVideo = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Form />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BZUu3X-oja4?si=Swmtk5Acrtnc1B5B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default FormAndVideo;
