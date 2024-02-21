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
                  <p style={{ marginTop: 0, fontSize: '20px' }}><strong>Promover la excelencia empresarial</strong> <br />
                    Actuar como un socio estratégico, proporcionando orientación, conocimiento actualizado, herramientas y apoyo para impulsar el  crecimiento empresarial de nuestros partners.</p>
                </li>
                <li>
                  <p style={{ marginTop: 0, fontSize: '20px' }}><strong>Desarrollo continuo del talento</strong><br />
                    Guiar y acompañar a las empresas en el desarrollo constante de  sus equipos, dotándoles de las herramientas necesarias para  crecer en un contexto en el cual el cambio es una constante.</p>
                </li>
                <li>
                  <p style={{ marginTop: 0, fontSize: '20px' }}><strong>Respuesta a necesidades específicas y transversales</strong><br />
                    Entender las necesidades de cada empresa, ofreciendo soluciones formativas en formatos en abierto con el fin de impulsar una comunidad de expertos y en formatos in-company ofreciendo soluciones formativas personalizadas.</p>
                </li>
                <li>
                  <p style={{ marginTop: 0, fontSize: '20px' }}><strong>Desarrollo de habilidades clave</strong><br />
                    Desarrollar competencias clave como el pensamiento estratégico, sistémico y la capacidad de innovación para sentar las bases para un crecimiento sostenido.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="image">
          <figure className="wp-block-image size-large">
            <img
              loading="lazy"
              decoding="async"
              width="563"
              src="https://forbes.es/wp-content/uploads/2024/01/Diseno-sin-titulo-7-563x675.png"
              alt=""
              className="wp-image-403244"
              style={{ maxWidth: '100%', height: 'auto'}}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default AdditionalContent;
