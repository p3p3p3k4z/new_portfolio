export interface Certificate {
  id: string;
  title: string;
  image: string;
  link?: string;
  institution: string;
  category: 'utm' | 'alura' | 'datacamp' | 'nasa' | 'platzi' | 'others';
  featured: boolean;
}

export const educationData = {
  es: {
    // --- 1. UTM (Universidad) ---
    utm: [
      {
        id: 'utm-1',
        title: 'Curso Sistema Operativo GNU/Linux. Nivel Básico',
        image: '/img/linux.png',
        institution: 'UTM',
        category: 'utm',
        featured: true // Destacado en Home
      },
      {
        id: 'utm-2',
        title: 'Taller Uso del lenguaje SPARQL para datos abiertos',
        image: '/img/sparql.png',
        institution: 'UTM',
        category: 'utm',
        featured: false
      },
      {
        id: 'utm-3',
        title: 'Taller Programación básica en Python',
        image: '/img/basico_python.png',
        institution: 'UTM',
        category: 'utm',
        featured: false
      }
    ],

    // --- 2. ALURA / ORACLE ---
    alura: [
      {
        id: 'alura-1',
        title: 'Certificación OCI Foundations Associate - ONE',
        link: 'https://app.aluracursos.com/user/mario-ness64/degree-certificacion-oci-one-16006/certificate',
        image: '/img/alura7.jpg',
        institution: 'Oracle / Alura',
        category: 'alura',
        featured: true // Destacado en Home
      },
      {
        id: 'alura-2',
        title: 'SQL con MySQL Server de Oracle - ONE',
        link: 'https://app.aluracursos.com/degree/certificate/609e0b6d-1b25-418c-8886-1dcdd6edee0e?lang',
        image: '/img/alura6.jpeg',
        institution: 'Alura',
        category: 'alura',
        featured: false
      },
      {
        id: 'alura-3',
        title: 'Programa Oracle Next Education F2 T7 Back-end',
        link: 'https://app.aluracursos.com/program/certificate/15dc312c-052e-468b-b6b5-71ee9b5fdbc3?lang',
        image: '/img/alura5.png',
        institution: 'Alura',
        category: 'alura',
        featured: false
      },
      {
        id: 'alura-4',
        title: 'Formación Inteligencia Artificial y Java G7 - ONE',
        link: 'https://app.aluracursos.com/degree/certificate/98c2ab2a-2e16-4c7b-b94d-71354133bf3e?lang',
        image: '/img/alura4.png',
        institution: 'Alura',
        category: 'alura',
        featured: false
      },
      {
        id: 'alura-5',
        title: 'Formación Java y Spring Framework G7 - ONE',
        link: 'https://app.aluracursos.com/degree/certificate/a0c78257-27e0-4cfc-9a68-a7709755a062?lang',
        image: '/img/alura3.png',
        institution: 'Alura',
        category: 'alura',
        featured: false
      },
      {
        id: 'alura-6',
        title: 'Formación Java Orientado a Objetos G7 - ONE',
        link: 'https://app.aluracursos.com/degree/certificate/1ea4977e-e25a-4c93-8d01-2de5f96c93b5?lang',
        image: '/img/alura2.png',
        institution: 'Alura',
        category: 'alura',
        featured: false
      },
      {
        id: 'alura-7',
        title: 'Formación Principiante en Programación G7 - ONE',
        link: 'https://app.aluracursos.com/degree/certificate/f0e7675e-722c-4c34-abe9-2dff5987ef1a?lang',
        image: '/img/alura1.png',
        institution: 'Alura',
        category: 'alura',
        featured: false
      }
    ],

    // --- 3. NASA (Movido de 'others' a aquí por relevancia) ---
    nasa: [
      {
        id: 'nasa-1',
        title: 'Nasa Space Apps Challenge 2024 - Winner',
        image: '/img/nasa.png',
        institution: 'NASA',
        category: 'nasa',
        featured: true // Destacado en Home
      }
    ],

    // --- 4. DATACAMP (Supositorios / Futuros) ---
    datacamp: [
      {
        id: 'dc-1',
        title: 'Data Scientist with Python Track',
        image: '/img/datacamp_python.png', // Asegúrate de agregar una imagen dummy o real
        institution: 'DataCamp',
        category: 'datacamp',
        featured: false
      },
      {
        id: 'dc-2',
        title: 'Introduction to Deep Learning in Python',
        image: '/img/datacamp_dl.png',
        institution: 'DataCamp',
        category: 'datacamp',
        featured: false
      }
    ],

    // --- 5. PLATZI (Supositorios / Futuros) ---
    platzi: [
      {
        id: 'platzi-1',
        title: 'Curso Profesional de Git y GitHub',
        image: '/img/platzi_git.png', // Asegúrate de agregar una imagen dummy o real
        institution: 'Platzi',
        category: 'platzi',
        featured: false
      },
      {
        id: 'platzi-2',
        title: 'Curso de Fundamentos de Ingeniería de Software',
        image: '/img/platzi_soft.png',
        institution: 'Platzi',
        category: 'platzi',
        featured: false
      }
    ],

    // --- 6. OTROS (Udemy, Cursos libres, etc.) ---
    others: [
      {
        id: 'other-1',
        title: 'Oracle Certified Foundations Associate',
        image: '/img/eCertificate.jpg',
        institution: 'Oracle',
        category: 'others',
        featured: false
      },
      {
        id: 'other-3',
        title: 'Fundamentos de Javascript',
        image: '/img/javascript.png',
        institution: 'Udemy',
        category: 'others',
        featured: false
      },
      {
        id: 'other-4',
        title: 'Backend con Node.JS: Api Rest con express.JS',
        image: '/img/express.png',
        institution: 'Udemy',
        category: 'others',
        featured: false
      },
      {
        id: 'other-5',
        title: 'Curso de React.JS',
        image: '/img/react.jpeg',
        institution: 'Udemy',
        category: 'others',
        featured: false
      }
    ]
  },

  // ================= ENGLISH VERSION =================
  en: {
    utm: [
      { id: 'utm-1', title: 'GNU/Linux OS Course. Basic Level', image: '/img/linux.png', institution: 'UTM', category: 'utm', featured: true },
      { id: 'utm-2', title: 'SPARQL Workshop for Open Data', image: '/img/sparql.png', institution: 'UTM', category: 'utm', featured: false },
      { id: 'utm-3', title: 'Basic Python Programming Workshop', image: '/img/basico_python.png', institution: 'UTM', category: 'utm', featured: false }
    ],
    alura: [
      { id: 'alura-1', title: 'OCI Foundations Associate Certification - ONE', link: 'https://app.aluracursos.com/user/mario-ness64/degree-certificacion-oci-one-16006/certificate', image: '/img/alura7.jpg', institution: 'Oracle / Alura', category: 'alura', featured: true },
      { id: 'alura-2', title: 'SQL with Oracle MySQL Server - ONE', link: 'https://app.aluracursos.com/degree/certificate/609e0b6d-1b25-418c-8886-1dcdd6edee0e?lang', image: '/img/alura6.jpeg', institution: 'Alura', category: 'alura', featured: false },
      { id: 'alura-3', title: 'Oracle Next Education Program F2 T7 Back-end', link: 'https://app.aluracursos.com/program/certificate/15dc312c-052e-468b-b6b5-71ee9b5fdbc3?lang', image: '/img/alura5.png', institution: 'Alura', category: 'alura', featured: false },
      { id: 'alura-4', title: 'AI and Java Training G7 - ONE', link: 'https://app.aluracursos.com/degree/certificate/98c2ab2a-2e16-4c7b-b94d-71354133bf3e?lang', image: '/img/alura4.png', institution: 'Alura', category: 'alura', featured: false },
      { id: 'alura-5', title: 'Java and Spring Framework Training G7 - ONE', link: 'https://app.aluracursos.com/degree/certificate/a0c78257-27e0-4cfc-9a68-a7709755a062?lang', image: '/img/alura3.png', institution: 'Alura', category: 'alura', featured: false },
      { id: 'alura-6', title: 'Object Oriented Java Training G7 - ONE', link: 'https://app.aluracursos.com/degree/certificate/1ea4977e-e25a-4c93-8d01-2de5f96c93b5?lang', image: '/img/alura2.png', institution: 'Alura', category: 'alura', featured: false },
      { id: 'alura-7', title: 'Beginner Programming Training G7 - ONE', link: 'https://app.aluracursos.com/degree/certificate/f0e7675e-722c-4c34-abe9-2dff5987ef1a?lang', image: '/img/alura1.png', institution: 'Alura', category: 'alura', featured: false }
    ],
    nasa: [
      { id: 'nasa-1', title: 'Nasa Space Apps Challenge 2024 - Winner', image: '/img/nasa.png', institution: 'NASA', category: 'nasa', featured: true }
    ],
    datacamp: [
      { id: 'dc-1', title: 'Data Scientist with Python Track', image: '/img/datacamp_python.png', institution: 'DataCamp', category: 'datacamp', featured: false },
      { id: 'dc-2', title: 'Introduction to Deep Learning in Python', image: '/img/datacamp_dl.png', institution: 'DataCamp', category: 'datacamp', featured: false }
    ],
    platzi: [
      { id: 'platzi-1', title: 'Git and GitHub Professional Course', image: '/img/platzi_git.png', institution: 'Platzi', category: 'platzi', featured: false },
      { id: 'platzi-2', title: 'Software Engineering Fundamentals', image: '/img/platzi_soft.png', institution: 'Platzi', category: 'platzi', featured: false }
    ],
    others: [
      { id: 'other-1', title: 'Oracle Certified Foundations Associate', image: '/img/eCertificate.jpg', institution: 'Oracle', category: 'others', featured: false },
      { id: 'other-3', title: 'Javascript Fundamentals', image: '/img/javascript.png', institution: 'Udemy', category: 'others', featured: false },
      { id: 'other-4', title: 'Backend with Node.JS: REST API with express.JS', image: '/img/express.png', institution: 'Udemy', category: 'others', featured: false },
      { id: 'other-5', title: 'React.JS Course', image: '/img/react.jpeg', institution: 'Udemy', category: 'others', featured: false }
    ]
  }
};