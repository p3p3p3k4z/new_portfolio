export interface Certificate {
  id: string;
  title: string;
  image: string;
  link?: string;
  institution: string;
  category: 'utm' | 'alura' | 'datacamp' | 'nasa' | 'platzi' | 'unam' | 'codigo_facilito' | 'waylearn' | 'others';
  featured: boolean;
}

export const educationData = {
  "es": {
    "utm": [
      {
        "id": "utm-1",
        "title": "Uso de aplicaciones de Google Workspace",
        "image": "/certifications/utm/uso_de_aplicaciones_de_google_workspace.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-2",
        "title": "Programación básica en Python",
        "image": "/certifications/utm/programacion_basica_en_python.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-3",
        "title": "Uso del lenguaje SPARQL",
        "image": "/certifications/utm/uso_del_lenguaje_sparql.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-4",
        "title": "Sistema Operativo GNU/Linux Nivel Básico",
        "image": "/certifications/utm/sistema_operativo_gnu_linux_nivel_basico.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": true
      }
    ],
    "alura": [
      {
        "id": "alura-1",
        "title": "Principiante en Programación G7",
        "image": "/certifications/alura/principiante_en_programacion_g7.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/f0e7675e-722c-4c34-abe9-2dff5987ef1a?lang"
      },
      {
        "id": "alura-2",
        "title": "Ruta hacia la Certificación OCI Foundations",
        "image": "/certifications/alura/ruta_hacia_la_certificacion_oci_foundations.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/user/mario-ness64/degree-certificacion-oci-one-16006/certificate"
      },
      {
        "id": "alura-3",
        "title": "SQL con MySQL y Oracle",
        "image": "/certifications/alura/sql_con_mysql_y_oracle.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/609e0b6d-1b25-418c-8886-1dcdd6edee0e?lang"
      },
      {
        "id": "alura-4",
        "title": "Programa G7 Backend",
        "image": "/certifications/alura/programa_g7_backend.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/program/certificate/15dc312c-052e-468b-b6b5-71ee9b5fdbc3?lang"
      },
      {
        "id": "alura-5",
        "title": "Inteligencia Artificial y Java",
        "image": "/certifications/alura/inteligencia_artificial_y_java.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/98c2ab2a-2e16-4c7b-b94d-71354133bf3e?lang"
      },
      {
        "id": "alura-6",
        "title": "Java y Spring Framework",
        "image": "/certifications/alura/java_y_spring_framework.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/a0c78257-27e0-4cfc-9a68-a7709755a062?lang"
      },
      {
        "id": "alura-7",
        "title": "Java Orientado a Objetos",
        "image": "/certifications/alura/java_orientado_a_objetos.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false
      },
      {
        "id": "alura-8",
        "title": "Oracle Certified Foundations Associate",
        "image": "/certifications/oracle/oracle_certified_foundations_associate.webp",
        "institution": "Oracle",
        category: "alura" as const,
        "featured": true,
        "link": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F5409B5B0934AE454FFD63E4ADBC53EEC131095FE9BF457757AF09FFE65AD7AD"
      }
    ],
    "datacamp": [
      {
        "id": "dc-1",
        "title": "Desarrollador Asociado de Python",
        "image": "/certifications/datacamp/python_basico/desarrollador_asociado_de_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": true
      },
      {
        "id": "dc-2",
        "title": "Expresiones Regulares en Python",
        "image": "/certifications/datacamp/python_basico/expresiones_regulares_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-3",
        "title": "Programación Orientada a Objetos en Python",
        "image": "/certifications/datacamp/python_basico/programacion_orientada_a_objetos_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-4",
        "title": "Tipos de Datos en Python",
        "image": "/certifications/datacamp/python_basico/tipos_de_datos_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-5",
        "title": "Caja de Herramientas de Python",
        "image": "/certifications/datacamp/python_basico/caja_de_herramientas_de_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-6",
        "title": "Python Intermedio para Desarrolladores",
        "image": "/certifications/datacamp/python_basico/python_intermedio_para_desarrolladores.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-7",
        "title": "Introducción a Python para Desarrolladores",
        "image": "/certifications/datacamp/python_basico/introduccion_a_python_para_desarrolladores.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-8",
        "title": "Ingeniero de Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/ingeniero_de_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": true
      },
      {
        "id": "dc-9",
        "title": "CI/CD para Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/ci_cd_para_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-10",
        "title": "Introducción a Docker",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_docker.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-11",
        "title": "Monitoreo de Machine Learning en Python",
        "image": "/certifications/datacamp/ML_engineer/monitoreo_de_machine_learning_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-12",
        "title": "Conceptos de Monitoreo en Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/conceptos_de_monitoreo_en_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-13",
        "title": "Control de Versiones de Datos con DVC",
        "image": "/certifications/datacamp/ML_engineer/control_de_versiones_de_datos_con_dvc.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-14",
        "title": "Calidad de Datos con Great Expectations",
        "image": "/certifications/datacamp/ML_engineer/calidad_de_datos_con_great_expectations.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-15",
        "title": "ETL y ELT en Python",
        "image": "/certifications/datacamp/ML_engineer/etl_y_elt_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-16",
        "title": "Introducción a MLflow",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_mlflow.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-17",
        "title": "Despliegue y Ciclo de Vida de MLOps",
        "image": "/certifications/datacamp/ML_engineer/despliegue_y_ciclo_de_vida_de_mlops.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-18",
        "title": "Introducción a Shell",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_shell.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-19",
        "title": "Conceptos de MLOps",
        "image": "/certifications/datacamp/ML_engineer/conceptos_de_mlops.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-20",
        "title": "Aprendizaje Supervisado con scikit-learn",
        "image": "/certifications/datacamp/ML_engineer/aprendizaje_supervisado_con_scikit_learn.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-21",
        "title": "Machine Learning con PySpark",
        "image": "/certifications/datacamp/ML_engineer/machine_learning_con_pyspark.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-22",
        "title": "Entendiendo el Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/entendiendo_el_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-23",
        "title": "Clasificadores Lineales en Python",
        "image": "/certifications/datacamp/cientifico_ml/clasificadores_lineales_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-24",
        "title": "Aprendizaje No Supervisado en Python",
        "image": "/certifications/datacamp/cientifico_ml/aprendizaje_no_supervisado_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      }
    ],
    "nasa": [
      {
        "id": "nasa-1",
        "title": "NASA Space Apps Challenge 2024",
        "image": "/certifications/nasa/nasa_space_apps_challenge_2024.webp",
        "institution": "NASA",
        category: "nasa" as const,
        "featured": false
      },
      {
        "id": "nasa-2",
        "title": "NASA Space Apps Challenge 2025",
        "image": "/certifications/nasa/nasa_space_apps_challenge_2025.webp",
        "institution": "NASA",
        category: "nasa" as const,
        "featured": false
      }
    ],
    "platzi": [
      {
        "id": "platzi-1",
        "title": "Backend con Node.js y Express",
        "image": "/certifications/platzi/backend_con_node_js_y_express.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      },
      {
        "id": "platzi-2",
        "title": "Fundamentos de JavaScript",
        "image": "/certifications/platzi/fundamentos_de_javascript.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      },
      {
        "id": "platzi-3",
        "title": "React.js",
        "image": "/certifications/platzi/react_js.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      }
    ],
    "unam": [
      {
        "id": "hackods-1",
        "title": "Google - Building with AI: Herramientas Cloud",
        "image": "/certifications/unam/google_building_with_ai_herramientas_cloud.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-2",
        "title": "Taller de Pitch",
        "image": "/certifications/unam/taller_de_pitch.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-3",
        "title": "Mi primer tablero en GitHub pages",
        "image": "/certifications/unam/mi_primer_tablero_en_github_pages.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-4",
        "title": "Quarto para tableros de datos",
        "image": "/certifications/unam/quarto_para_tableros_de_datos.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-5",
        "title": "Visualización de datos con Plotly",
        "image": "/certifications/unam/visualizacion_de_datos_con_plotly.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-6",
        "title": "Diseño UX/UI",
        "image": "/certifications/unam/diseno_ux_ui.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-7",
        "title": "Manejo de datos con Pandas",
        "image": "/certifications/unam/manejo_de_datos_con_pandas.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-8",
        "title": "Portal de Datos Abiertos de la UNAM",
        "image": "/certifications/unam/portal_de_datos_abiertos_de_la_unam.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-9",
        "title": "Taller de uso de datos de INEGI",
        "image": "/certifications/unam/taller_de_uso_de_datos_de_inegi.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-10",
        "title": "Instalación de ecosistema para ciencia libre",
        "image": "/certifications/unam/instalacion_de_ecosistema_para_ciencia_libre.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-11",
        "title": "México frente a la Agenda 2030",
        "image": "/certifications/unam/mexico_frente_a_la_agenda_2030.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      }
    ],
    "codigo_facilito": [
      {
        "id": "cf-1",
        "title": "Ruta DevOps Profesional",
        "image": "/certifications/codigo_facilito/ruta_devops_profesional.webp",
        "institution": "Código Facilito",
        category: "codigo_facilito" as const,
        "featured": false
      },
      {
        "id": "cf-2",
        "title": "Ruta de Kubernetes",
        "image": "/certifications/codigo_facilito/ruta_de_kubernetes.webp",
        "institution": "Código Facilito",
        category: "codigo_facilito" as const,
        "featured": false
      }
    ],
    "waylearn": [
      {
        "id": "way-1",
        "title": "Construye tu Propio Chatbot Asistente con Poe",
        "image": "/certifications/waylearn/construye_tu_propio_chatbot_asistente_con_poe.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-2",
        "title": "Solana LATAM Hackathon",
        "image": "/certifications/waylearn/solana_latam_hackathon.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-3",
        "title": "Solana Latam Builders Program (Rust)",
        "image": "/certifications/waylearn/solana_latam_builders_program_rust.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-4",
        "title": "Incubación Proyecto Huellazo",
        "image": "/certifications/waylearn/incubacion_proyecto_huellazo.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      }
    ],
    "others": [
      {
        "id": "oth-1",
        "title": "Certificado de React",
        "image": "/certifications/certificates/certificado_de_react.webp",
        "institution": "Otros",
        category: "others" as const,
        "featured": true
      },
      {
        "id": "oth-2",
        "title": "Bolt x Minimax",
        "image": "/certifications/others/bolt_x_minimax.webp",
        "institution": "Otros",
        category: "others" as const,
        "featured": true
      }
    ]
  },
  "en": {
    "utm": [
      {
        "id": "utm-1",
        "title": "Use of Google Workspace Applications",
        "image": "/certifications/utm/uso_de_aplicaciones_de_google_workspace.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-2",
        "title": "Basic Python Programming",
        "image": "/certifications/utm/programacion_basica_en_python.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-3",
        "title": "SPARQL Language Usage",
        "image": "/certifications/utm/uso_del_lenguaje_sparql.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": false
      },
      {
        "id": "utm-4",
        "title": "GNU/Linux OS Basic Level",
        "image": "/certifications/utm/sistema_operativo_gnu_linux_nivel_basico.webp",
        "institution": "UTM",
        category: "utm" as const,
        "featured": true
      }
    ],
    "alura": [
      {
        "id": "alura-1",
        "title": "Beginner in Programming G7",
        "image": "/certifications/alura/principiante_en_programacion_g7.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/f0e7675e-722c-4c34-abe9-2dff5987ef1a?lang"
      },
      {
        "id": "alura-2",
        "title": "Path to OCI Foundations Certification",
        "image": "/certifications/alura/ruta_hacia_la_certificacion_oci_foundations.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/user/mario-ness64/degree-certificacion-oci-one-16006/certificate"
      },
      {
        "id": "alura-3",
        "title": "SQL with MySQL and Oracle",
        "image": "/certifications/alura/sql_con_mysql_y_oracle.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/609e0b6d-1b25-418c-8886-1dcdd6edee0e?lang"
      },
      {
        "id": "alura-4",
        "title": "G7 Backend Program",
        "image": "/certifications/alura/programa_g7_backend.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/program/certificate/15dc312c-052e-468b-b6b5-71ee9b5fdbc3?lang"
      },
      {
        "id": "alura-5",
        "title": "Artificial Intelligence and Java",
        "image": "/certifications/alura/inteligencia_artificial_y_java.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/98c2ab2a-2e16-4c7b-b94d-71354133bf3e?lang"
      },
      {
        "id": "alura-6",
        "title": "Java and Spring Framework",
        "image": "/certifications/alura/java_y_spring_framework.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false,
        "link": "https://app.aluracursos.com/degree/certificate/a0c78257-27e0-4cfc-9a68-a7709755a062?lang"
      },
      {
        "id": "alura-7",
        "title": "Object-Oriented Java",
        "image": "/certifications/alura/java_orientado_a_objetos.webp",
        "institution": "Alura / Oracle",
        category: "alura" as const,
        "featured": false
      },
      {
        "id": "alura-8",
        "title": "Oracle Certified Foundations Associate",
        "image": "/certifications/oracle/oracle_certified_foundations_associate.webp",
        "institution": "Oracle",
        category: "alura" as const,
        "featured": true,
        "link": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F5409B5B0934AE454FFD63E4ADBC53EEC131095FE9BF457757AF09FFE65AD7AD"
      }
    ],
    "datacamp": [
      {
        "id": "dc-1",
        "title": "Associate Python Developer",
        "image": "/certifications/datacamp/python_basico/desarrollador_asociado_de_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": true
      },
      {
        "id": "dc-2",
        "title": "Regular Expressions in Python",
        "image": "/certifications/datacamp/python_basico/expresiones_regulares_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-3",
        "title": "Intro to Object-Oriented Programming in Python",
        "image": "/certifications/datacamp/python_basico/programacion_orientada_a_objetos_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-4",
        "title": "Data Types in Python",
        "image": "/certifications/datacamp/python_basico/tipos_de_datos_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-5",
        "title": "Python Toolbox",
        "image": "/certifications/datacamp/python_basico/caja_de_herramientas_de_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-6",
        "title": "Intermediate Python for Developers",
        "image": "/certifications/datacamp/python_basico/python_intermedio_para_desarrolladores.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-7",
        "title": "Introduction to Python for Developers",
        "image": "/certifications/datacamp/python_basico/introduccion_a_python_para_desarrolladores.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-8",
        "title": "Machine Learning Engineer",
        "image": "/certifications/datacamp/ML_engineer/ingeniero_de_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": true
      },
      {
        "id": "dc-9",
        "title": "CI/CD for Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/ci_cd_para_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-10",
        "title": "Introduction to Docker",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_docker.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-11",
        "title": "Monitoring Machine Learning in Python",
        "image": "/certifications/datacamp/ML_engineer/monitoreo_de_machine_learning_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-12",
        "title": "Monitoring Machine Learning Concepts",
        "image": "/certifications/datacamp/ML_engineer/conceptos_de_monitoreo_en_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-13",
        "title": "Data Versioning with DVC",
        "image": "/certifications/datacamp/ML_engineer/control_de_versiones_de_datos_con_dvc.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-14",
        "title": "Data Quality with Great Expectations",
        "image": "/certifications/datacamp/ML_engineer/calidad_de_datos_con_great_expectations.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-15",
        "title": "ETL and ELT in Python",
        "image": "/certifications/datacamp/ML_engineer/etl_y_elt_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-16",
        "title": "Introduction to MLflow",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_mlflow.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-17",
        "title": "MLOps Deployment and Life Cycling",
        "image": "/certifications/datacamp/ML_engineer/despliegue_y_ciclo_de_vida_de_mlops.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-18",
        "title": "Introduction to Shell",
        "image": "/certifications/datacamp/ML_engineer/introduccion_a_shell.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-19",
        "title": "MLOps Concepts",
        "image": "/certifications/datacamp/ML_engineer/conceptos_de_mlops.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-20",
        "title": "Supervised Learning with scikit-learn",
        "image": "/certifications/datacamp/ML_engineer/aprendizaje_supervisado_con_scikit_learn.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-21",
        "title": "Machine Learning with PySpark",
        "image": "/certifications/datacamp/ML_engineer/machine_learning_con_pyspark.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-22",
        "title": "Understanding Machine Learning",
        "image": "/certifications/datacamp/ML_engineer/entendiendo_el_machine_learning.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-23",
        "title": "Linear Classifiers in Python",
        "image": "/certifications/datacamp/cientifico_ml/clasificadores_lineales_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      },
      {
        "id": "dc-24",
        "title": "Unsupervised Learning in Python",
        "image": "/certifications/datacamp/cientifico_ml/aprendizaje_no_supervisado_en_python.webp",
        "institution": "DataCamp",
        category: "datacamp" as const,
        "featured": false
      }
    ],
    "nasa": [
      {
        "id": "nasa-1",
        "title": "NASA Space Apps Challenge 2024",
        "image": "/certifications/nasa/nasa_space_apps_challenge_2024.webp",
        "institution": "NASA",
        category: "nasa" as const,
        "featured": false
      },
      {
        "id": "nasa-2",
        "title": "NASA Space Apps Challenge 2025",
        "image": "/certifications/nasa/nasa_space_apps_challenge_2025.webp",
        "institution": "NASA",
        category: "nasa" as const,
        "featured": false
      }
    ],
    "platzi": [
      {
        "id": "platzi-1",
        "title": "Backend with Node.js and Express",
        "image": "/certifications/platzi/backend_con_node_js_y_express.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      },
      {
        "id": "platzi-2",
        "title": "JavaScript Fundamentals",
        "image": "/certifications/platzi/fundamentos_de_javascript.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      },
      {
        "id": "platzi-3",
        "title": "React.js",
        "image": "/certifications/platzi/react_js.webp",
        "institution": "Platzi",
        category: "platzi" as const,
        "featured": false
      }
    ],
    "unam": [
      {
        "id": "hackods-1",
        "title": "Google - Building with AI: Cloud Tools",
        "image": "/certifications/unam/google_building_with_ai_herramientas_cloud.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-2",
        "title": "Pitch Workshop",
        "image": "/certifications/unam/taller_de_pitch.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-3",
        "title": "My First Dashboard on GitHub Pages",
        "image": "/certifications/unam/mi_primer_tablero_en_github_pages.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-4",
        "title": "Quarto for Data Dashboards",
        "image": "/certifications/unam/quarto_para_tableros_de_datos.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-5",
        "title": "Data Visualization with Plotly",
        "image": "/certifications/unam/visualizacion_de_datos_con_plotly.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-6",
        "title": "UX/UI Design",
        "image": "/certifications/unam/diseno_ux_ui.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-7",
        "title": "Data Handling with Pandas",
        "image": "/certifications/unam/manejo_de_datos_con_pandas.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-8",
        "title": "UNAM Open Data Portal",
        "image": "/certifications/unam/portal_de_datos_abiertos_de_la_unam.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-9",
        "title": "INEGI Data Usage Workshop",
        "image": "/certifications/unam/taller_de_uso_de_datos_de_inegi.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-10",
        "title": "Free Science Ecosystem Installation",
        "image": "/certifications/unam/instalacion_de_ecosistema_para_ciencia_libre.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      },
      {
        "id": "hackods-11",
        "title": "Mexico and the 2030 Agenda",
        "image": "/certifications/unam/mexico_frente_a_la_agenda_2030.webp",
        "institution": "HackODS UNAM",
        category: "unam" as const,
        "featured": false
      }
    ],
    "codigo_facilito": [
      {
        "id": "cf-1",
        "title": "Professional DevOps Path",
        "image": "/certifications/codigo_facilito/ruta_devops_profesional.webp",
        "institution": "Código Facilito",
        category: "codigo_facilito" as const,
        "featured": false
      },
      {
        "id": "cf-2",
        "title": "Kubernetes Path",
        "image": "/certifications/codigo_facilito/ruta_de_kubernetes.webp",
        "institution": "Código Facilito",
        category: "codigo_facilito" as const,
        "featured": false
      }
    ],
    "waylearn": [
      {
        "id": "way-1",
        "title": "Build Your Own Chatbot Assistant with Poe",
        "image": "/certifications/waylearn/construye_tu_propio_chatbot_asistente_con_poe.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-2",
        "title": "Solana LATAM Hackathon",
        "image": "/certifications/waylearn/solana_latam_hackathon.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-3",
        "title": "Solana Latam Builders Program (Rust)",
        "image": "/certifications/waylearn/solana_latam_builders_program_rust.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      },
      {
        "id": "way-4",
        "title": "Huellazo Project Incubation",
        "image": "/certifications/waylearn/incubacion_proyecto_huellazo.webp",
        "institution": "WayLearn",
        category: "waylearn" as const,
        "featured": false
      }
    ],
    "others": [
      {
        "id": "oth-1",
        "title": "React Certificate",
        "image": "/certifications/certificates/certificado_de_react.webp",
        "institution": "Otros",
        category: "others" as const,
        "featured": true
      },
      {
        "id": "oth-2",
        "title": "Bolt x Minimax",
        "image": "/certifications/others/bolt_x_minimax.webp",
        "institution": "Otros",
        category: "others" as const,
        "featured": true
      }
    ]
  }
};
