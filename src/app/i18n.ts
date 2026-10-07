export type Language = "fr" | "en";

export interface PortfolioContent {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: Record<string, string>;
  skills: { title: string; items: string[] }[];
  experiences: {
    period: string;
    title: string;
    place: string;
    context: string;
    work: string;
    technologies: string;
    contribution: string;
  }[];
  projects: {
    title: string;
    status: string;
    description: string;
    stack: string;
    link: string;
  }[];
  education: {
    period: string;
    title: string;
    place: string;
    details: string;
  }[];
  associations: { period: string; title: string; details: string }[];
  contact: Record<string, string>;
  footer: Record<string, string>;
}

const commonSkills = {
  backend: [
    "Java",
    "Spring Boot",
    "API REST",
    "C#",
    "C / C++",
    "Kotlin",
    "Python",
  ],
  frontend: ["Angular", "Vue.js", "HTML / CSS", "JavaScript"],
  data: [
    "SQL / HQL",
    "Hibernate",
    "MySQL / MariaDB",
    "Apache POI",
    "Tests d’API avec curl",
  ],
  ops: ["Linux", "SSH", "Git / GitLab", "Docker", "Kubernetes"],
  languages: [
    "Français — langue maternelle",
    "Anglais — C1, TOEIC 975 / 990",
    "Espagnol — B1",
  ],
};

export const content: Record<Language, PortfolioContent> = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Ethan Cabanes",
      title:
        "Étudiant ingénieur, informatique pour la santé — recherche de stage de fin d’études",
      intro:
        "Je recherche un stage de 22 à 26 semaines à partir du 25/01/2027, dans une structure liée à la santé, sur des sujets d’ingénierie logicielle, de cloud ou de DevOps.",
      availability: "Disponible à partir du 25/01/2027",
      cv: "Télécharger mon CV",
      contact: "Me contacter",
    },
    about: {
      title: "À propos",
      text: "Étudiant en dernière année du cycle ingénieur de l’école ISIS Castres, je me forme à l’ingénierie et au développement de solutions numériques en santé. Je suis plus à l’aise côté serveur et je souhaite évoluer vers un profil de développeur full-stack Java / Angular. J’attache une grande importance à la fiabilité des données, à la compréhension du contexte métier et à la qualité du code. Je recherche un stage de fin d’études à Béziers, Montpellier, Toulouse ou à distance.",
    },
    skills: [
      { title: "Backend", items: commonSkills.backend },
      { title: "Frontend", items: commonSkills.frontend },
      { title: "Données", items: commonSkills.data },
      { title: "DevOps et systèmes", items: commonSkills.ops },
      { title: "Langues", items: commonSkills.languages },
    ],
    experiences: [
      {
        period: "Mai — juillet 2026",
        title: "Stage d’assistant ingénieur",
        place: "Yooli · Toulouse",
        context:
          "Réimplémentation d’un algorithme C# de génération de bilans statistiques dans un outil Spring Boot autonome.",
        work: "Mise en place d’un accès multi-bases, calcul et persistance d’indicateurs, exposition d’une API REST et comparaison des résultats avec l’historique de l’ancien outil.",
        technologies: "Java, Spring Boot, Hibernate, HQL, API REST",
        contribution:
          "J’ai pu mettre en pratique une démarche de réimplémentation et de validation des résultats, sans rattacher à ce projet mes connaissances en Docker et Kubernetes.",
      },
      {
        period: "Avril — juin 2025",
        title: "Stage",
        place: "Polyclinique St-Privat · Boujan-sur-Libron",
        context:
          "Préparation du renouvellement de la certification HAS, sur le volet numérique.",
        work: "Analyse des pratiques de gestion des données, des procédures de gestion des incidents SI et du guide d’hygiène informatique.",
        technologies:
          "Systèmes d’information de santé, gestion des données, procédures SI",
        contribution:
          "Cette expérience m’a permis de mieux comprendre les contraintes organisationnelles et de sécurité propres à un établissement de santé.",
      },
      {
        period: "Janvier — mai 2026",
        title: "Semestre d’échange",
        place: "Prince of Songkla University · Phuket, Thaïlande",
        context: "Parcours « Digital Engineering ».",
        work: "Semestre validé avec de très bonnes notes dans un environnement universitaire international.",
        technologies: "Digital Engineering",
        contribution:
          "J’ai développé mon autonomie et ma capacité à travailler dans un contexte interculturel.",
      },
    ],
    projects: [
      {
        title: "Jeu incrémental",
        status: "En cours de développement",
        description:
          "Projet personnel de jeu incrémental de type « Adventure Capitalist », avec un frontend Angular et un backend Spring Boot REST.",
        stack: "Angular · Spring Boot · REST",
        link: "TODO — ajouter le lien GitHub",
      },
      {
        title: "Futurs projets",
        status: "Emplacement réservé",
        description:
          "TODO — compléter cette carte avec un futur projet, sa description et son lien.",
        stack: "TODO",
        link: "TODO — ajouter un lien",
      },
    ],
    education: [
      {
        period: "En cours · dernière année",
        title:
          "Cycle ingénieur — Ingénierie et Développement de Solutions Numériques en Santé",
        place: "ISIS Castres",
        details: "Informatique et Systèmes d’Information pour la Santé",
      },
      {
        period: "2026",
        title: "Semestre d’échange — Digital Engineering",
        place: "Prince of Songkla University · Phuket, Thaïlande",
        details: "Semestre validé avec de très bonnes notes",
      },
      { period: "Certification", title: "Pix", place: "", details: "498 pix" },
    ],
    associations: [
      {
        period: "Octobre 2023 — décembre 2025",
        title: "Vice-président de l’ACME",
        details: "",
      },
      {
        period: "Octobre 2024 — octobre 2025",
        title: "Responsable du pôle sport et jeux vidéo du BDE ScarabéeOsiris",
        details: "",
      },
    ],
    contact: {
      title: "Contact",
      text: "Pour échanger au sujet d’un stage, vous pouvez me contacter par e-mail ou via les liens professionnels ci-dessous.",
      emailLabel: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      text: "Portfolio personnel d’Ethan Cabanes.",
      cv: "CV",
      legal: "Mentions minimales",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Ethan Cabanes",
      title:
        "Engineering student in healthcare IT — seeking a final-year internship",
      intro:
        "I am looking for a 22-to-26-week internship starting on 25 January 2027, in a health-related organisation, focused on software engineering, cloud or DevOps.",
      availability: "Available from 25 January 2027",
      cv: "Download my CV",
      contact: "Contact me",
    },
    about: {
      title: "About",
      text: "I am a final-year engineering student at ISIS Castres, specialising in engineering and developing digital health solutions. I am more comfortable on the server side and aim to become a full-stack Java / Angular developer. I value reliable data, understanding the business context and code quality. I am looking for an internship in Béziers, Montpellier, Toulouse or remotely.",
    },
    skills: [
      {
        title: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "REST APIs",
          "C#",
          "C / C++",
          "Kotlin",
          "Python",
        ],
      },
      {
        title: "Frontend",
        items: ["Angular", "Vue.js", "HTML / CSS", "JavaScript"],
      },
      {
        title: "Data",
        items: [
          "SQL / HQL",
          "Hibernate",
          "MySQL / MariaDB",
          "Apache POI",
          "API testing with curl",
        ],
      },
      {
        title: "DevOps and systems",
        items: ["Linux", "SSH", "Git / GitLab", "Docker", "Kubernetes"],
      },
      {
        title: "Languages",
        items: [
          "French — native",
          "English — C1, TOEIC 975 / 990",
          "Spanish — B1",
        ],
      },
    ],
    experiences: [
      {
        period: "May — July 2026",
        title: "Assistant engineer intern",
        place: "Yooli · Toulouse",
        context:
          "Reimplemented a C# statistical report generation algorithm in a standalone Spring Boot tool.",
        work: "Implemented multi-database access, indicator calculation and persistence, a REST API, and result comparison with the former tool’s history.",
        technologies: "Java, Spring Boot, Hibernate, HQL, REST API",
        contribution:
          "This project gave me practical experience in reimplementation and result validation. Docker and Kubernetes were not part of this internship.",
      },
      {
        period: "April — June 2025",
        title: "Internship",
        place: "Polyclinique St-Privat · Boujan-sur-Libron",
        context:
          "Prepared the renewal of the HAS certification for the digital section.",
        work: "Analysed data management practices, IT incident procedures and the IT hygiene guide.",
        technologies:
          "Healthcare information systems, data management, IT procedures",
        contribution:
          "This experience helped me understand the organisational and security constraints of a healthcare facility.",
      },
      {
        period: "January — May 2026",
        title: "Exchange semester",
        place: "Prince of Songkla University · Phuket, Thailand",
        context: "Digital Engineering programme.",
        work: "Completed the semester with very good grades in an international academic environment.",
        technologies: "Digital Engineering",
        contribution:
          "I developed my autonomy and ability to work in an intercultural environment.",
      },
    ],
    projects: [
      {
        title: "Incremental game",
        status: "In development",
        description:
          "Personal incremental game project inspired by « Adventure Capitalist », with an Angular frontend and a Spring Boot REST backend.",
        stack: "Angular · Spring Boot · REST",
        link: "TODO — add GitHub link",
      },
      {
        title: "Future projects",
        status: "Placeholder",
        description:
          "TODO — complete this card with a future project, its description and its link.",
        stack: "TODO",
        link: "TODO — add a link",
      },
    ],
    education: [
      {
        period: "Current · final year",
        title:
          "Engineering degree — Digital Health Solutions Engineering and Development",
        place: "ISIS Castres",
        details: "Computer Science and Information Systems for Healthcare",
      },
      {
        period: "2026",
        title: "Exchange semester — Digital Engineering",
        place: "Prince of Songkla University · Phuket, Thailand",
        details: "Completed with very good grades",
      },
      { period: "Certification", title: "Pix", place: "", details: "498 pix" },
    ],
    associations: [
      {
        period: "October 2023 — December 2025",
        title: "Vice-president of ACME",
        details: "",
      },
      {
        period: "October 2024 — October 2025",
        title: "Sports and video games lead for BDE ScarabéeOsiris",
        details: "",
      },
    ],
    contact: {
      title: "Contact",
      text: "For internship opportunities, you can reach me by email or through the professional links below.",
      emailLabel: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      text: "Ethan Cabanes’ personal portfolio.",
      cv: "CV",
      legal: "Minimal legal notice",
    },
  },
};
