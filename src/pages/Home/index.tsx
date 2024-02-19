import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import FormAndVideo from '../../components/FormAndVideo';
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
        <title>HR: Comunicación Interna al servicio del Negocio</title>
        <meta name="title" content="HR: Comunicación Interna al servicio del Negocio" />
        <meta name="description" content="Descubre cómo la comunicación interna puede potenciar tu negocio. En Sagardoy, ofrecemos soluciones de comunicación interna para mejorar la eficiencia y el rendimiento de tu empresa. ¡Conoce nuestras propuestas hoy!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="comunicación interna, negocios, eficiencia empresarial, soluciones de comunicación" />
      </Helmet>
      <img className={classes.banner} src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FlandingForbes%2F01_animacion_2.gif?alt=media&token=e0f7c0d1-6978-43c1-bf55-8ab6fbb30e3c" alt="banner" />
      <FormAndVideo />
      <Footer />
    </div>
  )
}

export default Home;