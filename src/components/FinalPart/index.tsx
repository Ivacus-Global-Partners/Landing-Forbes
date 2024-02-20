import React from 'react';
import './index.css';

function AdditionalContent() {
  return (
    <div className="additional-content">
      <h2 className="wp-block-heading additional-heading">Lifelong Learning. Constant Evolution.</h2>
      <div className="content-and-image">
        <div className="content">
          <div className="wp-block-columns columnas-porque-elearning is-layout-flex wp-container-core-columns-layout-4 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <ol>
                <li><strong>Promover la excelencia empresarial</strong> Actuar como un socio estratégico, proporcionando orientación, conocimiento actualizado, herramientas y apoyo para impulsar el crecimiento empresarial de nuestros partners.</li>
                <li><strong>Desarrollo continuo del talento</strong> Guiar y acompañar a las empresas en el desarrollo constante de sus equipos, dotándoles de las herramientas necesarias para crecer en un contexto en el cual el cambio es una constante.</li>
                <li><strong>Respuesta a necesidades específicas y transversales</strong> Entender las necesidades de cada empresa, ofreciendo soluciones formativas en formatos en abierto con el fin de impulsar una comunidad de expertos y en formatos in-company ofreciendo soluciones formativas personalizadas.</li>
                <li><strong>Desarrollo de habilidades clave</strong> Desarrollar competencias clave como el pensamiento estratégico, sistémico y la capacidad de innovación para sentar las bases para un crecimiento sostenido.</li>
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
