import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import FormAndVideo from '../../components/FormAndVideo';
import Grid from '../../components/Grid';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 15px',
    rowGap: '30px',
  }
}))

const Home: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Helmet>
        <title>Forbes Sagardoy Business School - Forbes España</title>
        <meta name="title" content="Forbes Sagardoy Business School - Forbes España" />
        <meta name="description" content="En Forbes Sagardoy Business School entendemos que cada empresa es única, con desafíos y objetivos específicos. Ofrecemos programas diseñados a medida." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content="forbes, sagardoy, business school" />
      </Helmet>
      <div>
        <video width="100%" height="auto" muted loop autoPlay>
          <source src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FlandingForbes%2F01_animacion_2.mp4?alt=media&token=e87bf6f6-fab8-4b2e-87fd-4beddae00329" type="video/mp4" />
          Video no soportado
        </video>
      </div>
      <FormAndVideo />
      <Grid />
      <Footer />
    </div>
  )
}

export default Home;