import React from 'react';
import './index.css';
import { useLocation, useNavigate } from 'react-router-dom';

const cards = [
  {
    id: "0xe88c9e",
    title: "customer experience",
    description: "En la excelencia del lujo",
    img: "https://forbes.es/wp-content/uploads/2024/01/4-1-scaled.jpg",
    date: "Mayo-Junio (jueves)",
    format: "presencial",
    modules: 6,
    sessions: 12,
    link: "https://forbes.es/forbes-sagardoy-business-school/customer-experience/"
  },
  {
    id: "0xe88cb8",
    title: "el valor de la diversidad",
    description: "Diversidad, equidad, inclusión y accesibilidad",
    img: "https://forbes.es/wp-content/uploads/2024/01/3-1-scaled.jpg",
    date: "Mayo-Junio (martes/jueves)",
    format: "Presencial o virtual",
    modules: 8,
    sessions: 8,
    link: "https://forbes.es/forbes-sagardoy-business-school/el-poder-de-la-diversidad/"
  },
  {
    id: "0xe88ca5",
    title: "ia",
    description: "Transformando negocios e industrias",
    img: "https://forbes.es/wp-content/uploads/2024/01/5-1-scaled.jpg",
    date: "Mayo-Junio (jueves)",
    format: "Presencial o virtual",
    modules: 3,
    sessions: 6,
    link: "https://forbes.es/forbes-sagardoy-business-school/ia-transformando-la-industria/"
  },
  {
    id: "0xe88c96",
    title: "leadership essentials",
    description: "Impulsando tu trayectoria",
    img: "https://forbes.es/wp-content/uploads/2024/01/2-1-scaled.jpg",
    date: "Mayo-Junio (viernes)",
    format: "Presencial o virtual",
    modules: 2,
    sessions: 10,
    link: "https://forbes.es/forbes-sagardoy-business-school/leadeship-essentials/"
  },
  {
    id: "0xe88cac",
    title: "sostenibilidad corporativa",
    description: "Claves para el futuro",
    img: "https://forbes.es/wp-content/uploads/2024/01/1-1-scaled.jpg",
    date: "Mayo-Junio (jueves)",
    format: "Presencial o virtual",
    modules: 8,
    sessions: 8,
    link: "https://forbes.es/forbes-sagardoy-business-school-sostenibilidad-corporativa"
  },
  {
    id: "0",
    title: "forbes sagardoy: in company",
    description: "Programas a medida diseñados para tu empresa",
    img: "https://forbes.es/wp-content/uploads/2024/01/6-1-scaled.jpg",
    link: "https://forbes.es/forbes-sagardoy-business-school-in-company/"
  },
]

interface FlipCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date?: string;
  modality?: string;
  modules?: number;
  duration?: number;
  link?: string;
  id: string;
}

function FlipCard({ title, description, imageSrc, date, modality, modules, duration, link, id }: FlipCardProps) {
  const location = useLocation();
  const navigate = useNavigate();


  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string, offset: number = 0, program: string) => {
    e.preventDefault();

    const queryParams = new URLSearchParams(location.search);
    queryParams.set('program', program);

    navigate({ pathname: location.pathname, search: queryParams.toString() }, { replace: true });

    const element = document.getElementById(target);
    if (element instanceof HTMLElement) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: 'smooth',
      });
    }
  }

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
        {(date || modality || modules || duration || link) ?
          (<div className="flip-card-back">
            <ul>
              {/* Renderizar los campos solo si tienen contenido */}
              {date && date.trim() !== '' && <li><b>Fecha</b>:<br /> {date}</li>}
              {modality && modality.trim() !== '' && <li><b>Modalidad</b>:<br /> {modality}</li>}
              {modules && <li><b>Módulos</b>:<br /> {`${modules} ${modules === 1 ? 'módulo' : 'módulos'}`}</li>}
              {duration && <li><b>Duración</b>:<br /> {`${duration} ${duration === 1 ? 'sesión' : 'sesiones'}`}</li>}
            </ul>
            <a href="#form" onClick={(e) => smoothScroll(e, 'form', 30, id)}>Más Info</a>
          </div>)
          : <div className="flip-card-back"></div>
        }
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div style={{ width: '100%' }}>
      <h2 className="grid-title">Executive Programs</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <FlipCard
              title={card.title}
              description={card.description}
              imageSrc={card.img}
              date={card.date}
              modality={card.format}
              modules={card.modules}
              duration={card.sessions}
              link={card.link}
              id={card.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
