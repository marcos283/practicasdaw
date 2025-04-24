import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Generador de posts para linkedin",
    url: "https://postink-sigma.vercel.app/",
    image: "/screenshots/post_linkedin.jpg",
    description: "Herramienta para crear posts profesionales de LinkedIn",
    techDetails: "Desarrollado con React, Next.js y Gemini API. Utiliza CSS para los estilos y Vercel para el despliegue. Integra características de IA para generar contenido optimizado para LinkedIn. Herramienta Trae."
  },
  {
    id: 2,
    title: "Visualizador de Pokemon",
    url: "https://rumarkemon.netlify.app/",
    image: "/screenshots/pokemon.jpg",
    description: "Explorador interactivo del mundo Pokémon",
    techDetails: "Construido con Html5, Css, Javascript y PokeAPI. Desplegado manual en Netlify. Herramienta Cline con IDE VsCode."
  },
  {
    id: 3,
    title: "Imagen diaria de la Nasa",
    url: "https://nasaimage.lovable.app/",
    image: "/screenshots/nasa_image.jpg",
    description: "Descubre la imagen astronómica del día de la NASA",
    techDetails: "Desarrollado con React y la API oficial de la NASA (APOD). La traducción es a través de LibreTranslate Api. Se usa supabase para ocultar las apis a modo de servidor. Herramienta Lovable."
  },
  {
    id: 4,
    title: "WebQuest - Ciberseguridad",
    url: "https://cyberquest-guardian-es.lovable.app/",
    image: "/screenshots/webquest.jpg",
    description: "Aprende ciberseguridad de forma interactiva",
    techDetails: "Creado con React Typescript y Vite. Estilos y diseño responsive con Tailwind Css. Herramienta Lovable."
  }
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <GalleryGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </a>
            <InfoButton onClick={(e) => {
              e.preventDefault();
              setSelectedProject(project);
            }}>
              <FaInfoCircle />
            </InfoButton>
          </ProjectCard>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.techDetails}</p>
              <CloseButton onClick={() => setSelectedProject(null)}>
                Cerrar
              </CloseButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.darkGlass};
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.primary}33;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;  // Añadimos esta línea
  
  &:hover {
    background: ${({ theme }) => theme.colors.darkGlass};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.primary}33;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  padding: 0 1rem 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const InfoButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export default Gallery;