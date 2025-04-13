import styled from 'styled-components';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Generador de posts para linkedin",
    url: "https://postink-beryl.vercel.app/",
    image: "/screenshots/post_linkedin.jpg",
    description: "Herramienta para crear posts profesionales de LinkedIn"
  },
  {
    id: 2,
    title: "Visualizador de Pokemon",
    url: "https://rumarkemon.netlify.app/",
    image: "/screenshots/pokemon.jpg",
    description: "Explorador interactivo del mundo Pokémon"
  },
  {
    id: 3,
    title: "Imagen diaria de la Nasa",
    url: "https://nasaimage.lovable.app/",
    image: "/screenshots/nasa_image.jpg",
    description: "Descubre la imagen astronómica del día de la NASA"
  },
  {
    id: 4,
    title: "WebQuest - Ciberseguridad",
    url: "https://cyberquest-guardian-es.lovable.app/",
    image: "/screenshots/webquest.jpg",
    description: "Aprende ciberseguridad de forma interactiva"
  }
];

const Gallery = () => {
  return (
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
        </ProjectCard>
      ))}
    </GalleryGrid>
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

export default Gallery;