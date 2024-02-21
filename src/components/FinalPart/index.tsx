import React from 'react';
import './index.css';

function AdditionalContent() {
  return (
    <div className="additional-content">
      <h2 className="wp-block-heading">Lifelong Learning. Constant Evolution.</h2>
      <div className="content-and-image">
        <div className="content">
          <div className="wp-block-columns columnas-porque-elearning is-layout-flex wp-container-core-columns-layout-4 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <ol className="custom-ol">
                <li>
                  <strong>Promover la excelencia empresarial</strong>
                  <p>Actuar como un socio estratégico, proporcionando orientación,<br /> conocimiento actualizado, herramientas y apoyo para impulsar el <br /> crecimiento empresarial de nuestros partners.</p>
                </li>
                <li>
                  <strong>Desarrollo continuo del talento</strong>
                  <p>Guiar y acompañar a las empresas en el desarrollo constante de <br /> sus equipos, dotándoles de las herramientas necesarias para <br /> crecer en un contexto en el cual el cambio es una constante.</p>
                </li>
                <li>
                  <strong>Respuesta a necesidades específicas y transversales</strong>
                  <p>Entender las necesidades de cada empresa, ofreciendo soluciones formativas en formatos en abierto con el fin de impulsar una comunidad de expertos y en formatos in-company ofreciendo soluciones formativas personalizadas.</p>
                </li>
                <li>
                  <strong>Desarrollo de habilidades clave</strong>
                  <p>Desarrollar competencias clave como el pensamiento estratégico, sistémico y la capacidad de innovación para sentar las bases para un crecimiento sostenido.</p>
                </li>
              </ol>
              <div style={{ width: '100%', textAlign: 'right', marginTop: '30px', marginBottom: '30px' }}>
                <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-layout-1 wp-block-buttons-is-layout-flex">
                  <div className="button-container">
                    <div className="wp-block-button">
                      <a
                        className="wp-block-button__link wp-element-button"
                        href="#formulario"
                        style={{
                          background: '#8F0025',
                          color: 'white',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          padding: '10px 20px',
                          borderRadius: '1px',
                          textDecoration: 'none',
                          display: 'inline-block'
                        }}
                      >
                        Descargar folleto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <figure className="wp-block-image size-large">
            <img
              loading="lazy"
              decoding="async"
              width="563"
              height="675"
              src="https://forbes.es/wp-content/uploads/2024/01/Diseno-sin-titulo-7-563x675.png"
              alt=""
              className="wp-image-403244"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default AdditionalContent;
