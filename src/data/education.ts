export interface Certificate {
  id: string;
  title: string;
  image: string;
  link?: string;
  institution: string;
  category: 'utm' | 'alura' | 'datacamp' | 'nasa' | 'platzi' | 'others';
  featured: boolean;
}

const sharedEducationData = {
  // --- 1. UTM (Universidad) ---
  utm: [
    {
      id: 'utm-1',
      title: 'Curso Sistema Operativo GNU/Linux. Nivel Básico',
      image: '/certifications/certi_linuxBasico_pag1.webp',
      institution: 'UTM',
      category: 'utm' as const,
      featured: true
    },
    {
      id: 'utm-2',
      title: 'Taller Uso del lenguaje SPARQL para datos abiertos',
      image: '/certifications/certi_parql_pag1.webp',
      institution: 'UTM',
      category: 'utm' as const,
      featured: false
    },
    {
      id: 'utm-3',
      title: 'Taller Programación básica en Python',
      image: '/certifications/certi_python_pag1.webp',
      institution: 'UTM',
      category: 'utm' as const,
      featured: false
    }
  ],

  // --- 2. ALURA / ORACLE ---
  alura: [
    {
      id: 'oracle1',
      title: 'Oracle Certified Foundations Associate',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F5409B5B0934AE454FFD63E4ADBC53EEC131095FE9BF457757AF09FFE65AD7AD',
      image: '/certifications/eCertificate.webp',
      institution: 'Oracle / Alura',
      category: 'alura' as const,
      featured: true
    },
    {
      id: 'alura-1',
      title: 'Certificación OCI Foundations Associate - ONE',
      link: 'https://app.aluracursos.com/user/mario-ness64/degree-certificacion-oci-one-16006/certificate',
      image: '/certifications/alura7.webp',
      institution: 'Oracle / Alura',
      category: 'alura' as const,
      featured: false
    },
    {
      id: 'alura-2',
      title: 'SQL con MySQL Server de Oracle - ONE',
      link: 'https://app.aluracursos.com/degree/certificate/609e0b6d-1b25-418c-8886-1dcdd6edee0e?lang',
      image: '/certifications/alura6.webp',
      institution: 'Alura',
      category: 'alura' as const,
      featured: false
    },
    {
      id: 'alura-3',
      title: 'Programa Oracle Next Education F2 T7 Back-end',
      link: 'https://app.aluracursos.com/program/certificate/15dc312c-052e-468b-b6b5-71ee9b5fdbc3?lang',
      image: '/certifications/alura5.webp',
      institution: 'Alura',
      category: 'alura' as const,
      featured: false
    },
    {
      id: 'alura-4',
      title: 'Formación Inteligencia Artificial y Java G7 - ONE',
      link: 'https://app.aluracursos.com/degree/certificate/98c2ab2a-2e16-4c7b-b94d-71354133bf3e?lang',
      image: '/certifications/alura4.webp',
      institution: 'Alura',
      category: 'alura' as const,
      featured: false
    },
    {
      id: 'alura-5',
      title: 'Formación Java y Spring Framework G7 - ONE',
      link: 'https://app.aluracursos.com/degree/certificate/a0c78257-27e0-4cfc-9a68-a7709755a062?lang',
      image: '/certifications/alura3.webp',
      institution: 'Alura',
      category: 'alura' as const,
      featured: false
    },
    {
      id: 'alura-7',
      title: 'Formación Principiante en Programación G7 - ONE',
      link: 'https://app.aluracursos.com/degree/certificate/f0e7675e-722c-4c34-abe9-2dff5987ef1a?lang',
      image: '/certifications/certi_aluraBasico_pag1.webp',
      institution: 'Alura',
      category: 'alura' as const,
      featured: false
    }
  ],

  // --- 3. NASA ---
  nasa: [
    {
      id: 'nasa-1',
      title: 'Nasa Space Apps Challenge 2024 - Winner',
      image: '/certifications/nasa_cert_pag1.webp',
      institution: 'NASA',
      category: 'nasa' as const,
      featured: true
    },
    {
      id: 'nasa-2',
      title: 'Nasa Space Apps Challenge 2025',
      image: '/certifications/certificadonasargme2025_pag1.webp',
      institution: 'NASA',
      category: 'nasa' as const,
      featured: false
    }
  ],

  // --- 4. DATACAMP ---
  datacamp: [
    {
      id: 'dc-1',
      title: 'Understanding Machine Learning',
      image: '/certifications/ml_pag1.webp',
      institution: 'DataCamp',
      category: 'datacamp' as const,
      featured: false
    },
    {
      id: 'dc-2',
      title: 'Machine Learning with PySpark',
      image: '/certifications/ml spark_pag1.webp',
      institution: 'DataCamp',
      category: 'datacamp' as const,
      featured: false
    }
  ],

  // --- 5. PLATZI ---
  platzi: [
     {
      id: 'other-3',
      title: 'Fundamentos de Javascript',
      image: '/certifications/diploma-javascript_pag1.webp',
      institution: 'Platzi',
      category: 'platzi' as const,
      featured: false
    },
    {
      id: 'other-4',
      title: 'Backend con Node.JS: Api Rest con express.JS',
      image: '/certifications/diploma-backend-nodejs_pag1.webp',
      institution: 'Platzi',
      category: 'platzi' as const,
      featured: false
    },
    {
      id: 'other-5',
      title: 'Curso de React.JS',
      image: '/certifications/diploma-react_pag1.webp',
      institution: 'Platzi',
      category: 'platzi' as const,
      featured: false
    }
  ],

  // --- 6. OTROS ---
  others: [

  ]
};

export const educationData = {
  es: sharedEducationData,
  en: sharedEducationData
};