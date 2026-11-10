// Liste de toutes les questions/réponses extraites du guide
const questions = [
  // Vie associative
  {
    id: 1,
    theme: "Vie associative",
    question: "Combien d’associations étudiantes sont recensées à l’Université Paris-Saclay ?",
    type: "QCM",
    options: ["50", "112", "200", "73"],
    correctAnswer: "112",
    explanation: "Il y a 112 associations référencées sur l'annuaire du site de l'université.",
    points: 10
  },
  {
    id: 2,
    theme: "Vie associative",
    question: "Quelles sont les bonnes raisons de s’engager dans une association étudiante ? (Plusieurs réponses possibles)",
    type: "QCM_multiple",
    options: [
      "Rencontrer des gens",
      "Développer son réseau",
      "Gagner de l’argent",
      "Partager une passion",
      "Enrichir son CV"
    ],
    correctAnswer: ["Rencontrer des gens", "Développer son réseau", "Partager une passion", "Enrichir son CV"],
    explanation: "S'engager dans une association permet de rencontrer des gens, développer son réseau, partager une passion et enrichir son CV.",
    points: 15
  },
  {
    id: 3,
    theme: "Vie associative",
    question: "Votre association est-elle référencée par le pôle 'Accueil et vie associative' de la DVEEC ?",
    type: "Vrai/Faux",
    options: ["Vrai", "Faux"],
    correctAnswer: "Vrai",
    explanation: "Oui, pour bénéficier d'un soutien financier, logistique, ou d'une domiciliation, il faut être référencé.",
    points: 5
  },

  // Santé
  {
    id: 4,
    theme: "Santé",
    question: "Quels professionnels peut-on trouver au Service de Santé Étudiante (SSE) ? (Plusieurs réponses possibles)",
    type: "QCM_multiple",
    options: ["Psychologue", "Gynécologue", "Dentiste", "Tabacologue", "Ostéopathe"],
    correctAnswer: ["Psychologue", "Gynécologue", "Tabacologue"],
    explanation: "Le SSE propose des consultations avec psychologues, gynécologues, tabacologues, etc. (L'ostéopathe coûte 10€).",
    points: 15
  },
  {
    id: 5,
    theme: "Santé",
    question: "Qu’est-ce que Nightline ?",
    type: "QCM",
    options: [
      "Un service de livraison de repas",
      "Un service d’écoute gratuit, anonyme et confidentiel pour les étudiants",
      "Une application de méditation",
      "Un service de transport nocturne"
    ],
    correctAnswer: "Un service d’écoute gratuit, anonyme et confidentiel pour les étudiants",
    explanation: "Nightline est un service d'écoute assuré par des étudiants formés, disponible la nuit (21h-2h30) par téléphone ou chat.",
    points: 10
  },

  // Logement
  {
    id: 6,
    theme: "Logement",
    question: "Peut-on mettre son logement en location sur la plateforme CASA ?",
    type: "Vrai/Faux",
    options: ["Vrai", "Faux"],
    correctAnswer: "Vrai",
    explanation: "Oui, grâce à la fonction 'Recyclage' de CASA, les étudiants peuvent mettre leur logement à disposition.",
    points: 5
  },
  {
    id: 7,
    theme: "Logement",
    question: "Qu’est-ce que Visale ?",
    type: "QCM",
    options: [
      "Une caution locative gratuite de l’État pour les 18-30 ans",
      "Une application pour trouver des colocataires",
      "Un service de nettoyage",
      "Un site de vente de meubles"
    ],
    correctAnswer: "Une caution locative gratuite de l’État pour les 18-30 ans",
    explanation: "Visale est une caution locative gratuite de l'État pour les 18-30 ans, sans critères sociaux.",
    points: 10
  },

  // Aides
  {
    id: 8,
    theme: "Aides",
    question: "Quelle est l’aide maximale pour l’achat d’un ordinateur via l’AMII ?",
    type: "QCM",
    options: ["200€", "350€", "500€", "100€"],
    correctAnswer: "350€",
    explanation: "L'Aide Matérielle et Informatique Individuelle (AMII) offre jusqu'à 350€ pour l'achat d'un ordinateur.",
    points: 10
  },

  // Sport
  {
    id: 9,
    theme: "Sport",
    question: "Combien d’activités sportives sont proposées par le SUAPS ?",
    type: "QCM",
    options: ["50", "80", "100", "120"],
    correctAnswer: "80",
    explanation: "Le SUAPS propose plus de 80 activités sportives gratuites pour les étudiants.",
    points: 10
  },

  // Université Paris-Saclay
  {
    id: 10,
    theme: "Université Paris-Saclay",
    question: "En quelle année l’Université Paris-Saclay a-t-elle été fondée sous sa forme actuelle ?",
    type: "QCM",
    options: ["2015", "2019", "2020", "2022"],
    correctAnswer: "2019",
    explanation: "L'Université Paris-Saclay a été officiellement créée en 2019 et est entrée en vigueur le 1er janvier 2020.",
    points: 10
  }
];