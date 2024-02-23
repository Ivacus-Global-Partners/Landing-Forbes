import React from 'react';
import { Helmet } from 'react-helmet';
import FormAndVideo from '../../components/FormAndVideo';
import Grid from '../../components/Grid';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import FinalPart from '../../components/FinalPart';
const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 15px',
    rowGap: '30px',
  },
  downloadButton: {
    backgroundColor: '#8F0025',
    color: 'white',
    cursor: 'pointer',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '15px 20px 16px',
    fontFamily: 'Work Sans, sans-serif',
    transition: 'background-color 0.3s',
    border: 'none',
    '&:hover': {
      backgroundColor: '#000',
      
    },
    marginBottom: '25px'
  }
}))

const Home: React.FC = () => {

  const classes = useStyles();

  const scrollTo = (id: string, offset: number = 50) => () => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPos = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPos,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className={classes.container}>
      <Helmet>
        <title>Forbes Sagardoy Business School - Forbes España</title>
        <meta name="title" content="Forbes Sagardoy Business School - Forbes España" />
        <meta name="description" content="En Forbes Sagardoy Business School entendemos que cada empresa es única, con desafíos y objetivos específicos. Ofrecemos programas diseñados a medida." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content="forbes, sagardoy, business school" />
      </Helmet>
      <img className={classes.banner} src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FlandingForbes%2F01_animacion_2.gif?alt=media&token=cbd87672-3772-4589-9bcd-d8eaa7122259" alt="banner" />
      <FormAndVideo id="formulario" />
      <Grid />
      <FinalPart />
      <button onClick={scrollTo('formulario', 20)} className={classes.downloadButton}>descargar folleto</button>
    </div>
  )
}

export default Home;