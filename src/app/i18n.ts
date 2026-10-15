export type Language = "fr" | "en";

export interface PortfolioContent {
  nav: Record<string, string>;
  hero: Record<string, string>;
  meta: { title: string; description: string };
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
    role: string;
    github: string;
    demo: string;
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
  data: [
    "SQL / HQL / JPQL",
    "Hibernate",
    "MySQL / MariaDB / PostgreSQL",
    "Apache POI",
    "Tests d’API avec curl",
  ],
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
      association: "Vie associative",
      contact: "Contact",
    },
    meta: {
      title: "Ethan Cabanes — Étudiant ingénieur en informatique pour la santé",
      description:
        "Portfolio d’Ethan Cabanes, étudiant ingénieur en informatique pour la santé à la recherche d’un stage de fin d’études.",
    },
    hero: {
      eyebrow: "Ethan Cabanes",
      title:
        "Étudiant ingénieur, informatique pour la santé — recherche de stage de fin d’études",
      intro:
        "Je recherche un stage de 22 à 26 semaines à partir du 25/01/2027, dans une structure liée à la santé, sur des sujets d’ingénierie logicielle, de cloud ou de DevOps.",
      availability: "Disponible à partir du 25/01/2027",
      photoAlt: "Photo de profil d’Ethan Cabanes",
      cv: "Télécharger mon CV",
      contact: "Me contacter",
    },
    about: {
      title: "À propos",
      text: "Étudiant en dernière année du cycle ingénieur de l’école ISIS Castres, je me forme à l’ingénierie et au développement de solutions numériques en santé. Je suis plus à l’aise côté serveur et je souhaite évoluer vers un profil de développeur full-stack Java / Angular. J’attache une grande importance à la fiabilité des données, à la compréhension du contexte métier et à la qualité du code. Je recherche un stage de fin d’études à Béziers, Montpellier, Toulouse ou à distance.",
    },
    skills: [
      {
        title: "Back-end",
        items: [
          "Java",
          "Spring Boot",
          "Hibernate / HQL",
          "API REST",
          "GraphQL",
        ],
      },
      {
        title: "Front-end",
        items: ["Angular", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS"],
      },
      { title: "Données", items: commonSkills.data },
      {
        title: "Cloud et DevOps",
        items: [
          "Domaine visé : cloud et DevOps",
          "Linux",
          "SSH",
          "Docker et Kubernetes — projet Athletica",
        ],
      },
      {
        title: "Langues et certification",
        items: [...commonSkills.languages, "Pix : 498 pix"],
      },
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
          "J’ai pu mettre en pratique une démarche de réimplémentation et de validation des résultats.",
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
          "Projet réalisé en binôme avec Enzo Ferrier dans le module « Architectures orientées service » (ISIS, FIE5, S9). Recréation d’un jeu de gestion incrémentale de type AdVentureCapitalist dans l’univers de la série Invincible. Fonctionnalités : cycles de production, achats avec multiplicateurs, managers, paliers, améliorations, reset avec bonus permanent et sauvegarde par joueur.",
        stack: "Angular · NestJS · GraphQL · tests automatisés",
        role: "Rôle d’Ethan : développeur full-stack",
        github: "https://github.com/eferrier81/InvincibleCapitalist",
        demo: "Démo : TODO",
      },
      {
        title: "PTUT_Athletica",
        status: "TODO",
        description:
          "Projet tutoré de FIE 3 (2024-2025), réalisé en équipe de trois avec un client réel et encadré par un tuteur pédagogique. Méthode ScrumBan avec Trello et sprints de deux semaines. Application web de suivi des performances en course à pied : enregistrement de sessions, indicateurs personnalisés, mesures associées et visualisation de la progression sous forme de graphiques.",
        stack:
          "Vue.js · Vuetify · Spring Boot · H2 · Git/GitHub · GitHub Actions · Docker · Kubernetes",
        role: "Rôle : chef de projet, développement du frontend, tests et mise en place du déploiement Kubernetes",
        github: "https://github.com/ethan8134/PTUT_Athletica",
        demo: "Démo : TODO",
      },
      {
        title: "ProjetPharmacie",
        status: "TODO",
        description:
          "Application web développée avec Vue 3 et Vite, qui simule la gestion des stocks de médicaments d’une pharmacie. Fonctionnalités : navigation entre plusieurs pages, formulaires d’ajout, de modification et de suppression. Persistance des données : TODO.",
        stack: "Vue 3 · Vite",
        role: "Rôle : TODO",
        github: "https://github.com/ethan8134/ProjetPharmacie",
        demo: "Démo : TODO",
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
      association: "Associations",
      contact: "Contact",
    },
    meta: {
      title: "Ethan Cabanes — Engineering student in healthcare IT",
      description:
        "Ethan Cabanes’ portfolio, an engineering student in healthcare IT seeking a final-year internship.",
    },
    hero: {
      eyebrow: "Ethan Cabanes",
      title:
        "Engineering student in healthcare IT — seeking a final-year internship",
      intro:
        "I am looking for a 22-to-26-week internship starting on 25 January 2027, in a health-related organisation, focused on software engineering, cloud or DevOps.",
      availability: "Available from 25 January 2027",
      photoAlt: "Profile photo of Ethan Cabanes",
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
          "Hibernate / HQL",
          "REST APIs",
          "GraphQL",
        ],
      },
      {
        title: "Frontend",
        items: ["Angular", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS"],
      },
      {
        title: "Data",
        items: [
          "SQL / HQL / JPQL",
          "Hibernate",
          "MySQL / MariaDB / PostgreSQL",
          "Apache POI",
          "API testing with curl",
        ],
      },
      {
        title: "Cloud and DevOps",
        items: [
          "Target area: cloud and DevOps",
          "Linux",
          "SSH",
          "Docker and Kubernetes — Athletica project",
        ],
      },
      {
        title: "Languages and certification",
        items: [
          "French — native",
          "English — C1, TOEIC 975 / 990",
          "Spanish — B1",
          "Pix: 498 pix",
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
          "This project gave me practical experience in reimplementation and result validation.",
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
          "Project developed with Enzo Ferrier for the Service-Oriented Architectures module (ISIS, FIE5, S9). Recreation of an incremental management game inspired by AdVentureCapitalist in the universe of the Invincible series. Features: production cycles, multiplier-based purchases, managers, milestones, upgrades, reset with a permanent bonus and player saves.",
        stack: "Angular · NestJS · GraphQL · automated tests",
        role: "Ethan’s role: full-stack developer",
        github: "https://github.com/eferrier81/InvincibleCapitalist",
        demo: "Demo: TODO",
      },
      {
        title: "PTUT_Athletica",
        status: "TODO",
        description:
          "FIE 3 tutored project (2024–2025), developed by a team of three with a real client and supervised by an academic tutor. ScrumBan method using Trello and two-week sprints. Web application for monitoring running performance: session recording, custom indicators, associated measurements and progress charts.",
        stack:
          "Vue.js · Vuetify · Spring Boot · H2 · Git/GitHub · GitHub Actions · Docker · Kubernetes",
        role: "Role: project lead, frontend development, testing and Kubernetes deployment setup",
        github: "https://github.com/ethan8134/PTUT_Athletica",
        demo: "Demo: TODO",
      },
      {
        title: "ProjetPharmacie",
        status: "TODO",
        description:
          "Web application developed with Vue 3 and Vite, simulating medication stock management for a pharmacy. Features: navigation between several pages, and forms for adding, editing and deleting items. Data persistence: TODO.",
        stack: "Vue 3 · Vite",
        role: "Role: TODO",
        github: "https://github.com/ethan8134/ProjetPharmacie",
        demo: "Demo: TODO",
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
