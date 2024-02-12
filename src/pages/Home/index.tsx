import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

const Home: React.FC = () => {

  return (
    <div>
      <Helmet>
        <title>HR: Comunicación Interna al servicio del Negocio</title>
        <meta name="title" content="HR: Comunicación Interna al servicio del Negocio"/>
        <meta name="description" content="Descubre cómo la comunicación interna puede potenciar tu negocio. En Sagardoy, ofrecemos soluciones de comunicación interna para mejorar la eficiencia y el rendimiento de tu empresa. ¡Conoce nuestras propuestas hoy!"/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="comunicación interna, negocios, eficiencia empresarial, soluciones de comunicación" />
      </Helmet>
      <Form />
      <Footer />
    </div>
  )
}

export default Home;