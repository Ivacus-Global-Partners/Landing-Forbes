import React from 'react';
import './index.css';

interface FlipCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date?: string;
  modality?: string;
  modules?: string;
  duration?: string;
  link: string;
}

function FlipCard({ title, description, imageSrc, date, modality, modules, duration, link }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={title} className="card-image" />
          <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="flip-card-back">
        <ul>
            {/* Renderizar los campos solo si tienen contenido */}
            {date && date.trim() !== '' && <li><b>Fecha</b>: {date}</li>}
            {modality && modality.trim() !== '' && <li><b>Modalidad</b>: {modality}</li>}
            {modules && modules.trim() !== '' && <li><b>Módulos</b>: {modules}</li>}
            {duration && duration.trim() !== '' && <li><b>Duración</b>: {duration}</li>}
          </ul>
          <a href={link}>Más Info</a>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div>
     <h2 className="grid-title">Executive Programs</h2>
    <div className="card-container">
      <div className="card">
        <FlipCard
          title="Leadership Essentials"
          description="Impulsando tu trayectoria"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/2-1-scaled.jpg"
          date="Mayo-Junio (viernes)"
          modality="Presencial o virtual"
          modules="2 módulos"
          duration="10 sesiones"
          link="https://forbes.es/forbes-sagardoy-business-school/leadeship-essentials/"
        />
      </div>
      <div className="card">
        <FlipCard
          title="Customer Experience"
          description="En la excelencia del lujo"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/4-1-scaled.jpg"
          date="Mayo-Junio (Jueves)"
          modality="Presencial"
          modules="6 módulos"
          duration="12 sesiones"
          link="https://forbes.es/forbes-sagardoy-business-school/customer-experience/"
        />
      </div>
      <div className="card">
        <FlipCard
          title="El valor de la diversidad"
          description="Diversidad, equidad, inclusión y accesibilidad"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/3-1-scaled.jpg"
          date="Mayo-Junio (Martes/Jueves)"
          modality="Presencial o virtual"
          modules="8 módulos"
          duration="8 sesiones"
          link="https://forbes.es/forbes-sagardoy-business-school/el-poder-de-la-diversidad/"
        />
      </div>
      <div className="card">
        <FlipCard
          title="IA"
          description="Transformando negocios e industrias"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/3-1-scaled.jpg"
          date="Mayo-Junio (Jueves)"
          modality="Presencial o virtual"
          modules="3 módulos"
          duration="6 sesiones"
          link="https://forbes.es/forbes-sagardoy-business-school/el-poder-de-la-diversidad/"
        />
      </div>
      <div className="card">
        <FlipCard
          title="Sostenibilidad corporativa"
          description="Claves para el futuro"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/3-1-scaled.jpg"
          date="Mayo-Junio (Jueves)"
          modality="Presencial o virtual"
          modules="8 módulos"
          duration="8 sesiones"
          link="https://forbes.es/forbes-sagardoy-business-school/el-poder-de-la-diversidad/"
        />
      </div>
      <div className="card">
        <FlipCard
          title="Forbes Sagardoy: In Company"
          description="Programas a medida diseñados para tu empresa"
          imageSrc="https://forbes.es/wp-content/uploads/2024/01/3-1-scaled.jpg"
         link="https://forbes.es/forbes-sagardoy-business-school/el-poder-de-la-diversidad/"
        />
      </div>
    </div>
    </div>
  );
}

export default Grid;
