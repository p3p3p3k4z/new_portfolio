export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  // Agregamos esto para cuando hagamos la sección de "Ver más" tipo caso de estudio
  detailedDescription?: string; 
}