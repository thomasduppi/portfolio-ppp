<template>
    <div class="page-container">
      <h1 class="page-title">Mes Projets</h1>
      <main class="projects-container">
        <div v-for="projet in projets" :key="projet.id" class="project-item">
          <h2 class="project-title">{{ projet.title }}</h2>
          <p class="project-date">{{ projet.date }}</p>
          <p class="project-description">{{ projet.description }}</p>
          <div class="project-technologies">
            <h3>Technologies utilisées :</h3>
            <ul>
              <li v-for="tech in projet.technologies" :key="tech">{{ tech }}</li>
            </ul>
          </div>
          <div v-if="projet.competences.length" class="project-competences">
            <h3>Compétences associées :</h3>
            <ul>
              <li v-for="competence in projet.competences" :key="competence">{{ competence }}</li>
            </ul>
          </div>
          <div v-else>
            <h3>Projet fait hors IUT</h3>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  const projets = [
    {
      id: 1,
      title: "Création d'une application android avec mini jeu et une calculatrice",
      date: "Mars 2020",
      description:
        "Création d'une application android avec un mini jeu et une calculatrice avec mon tuteur de stage de 3ème",
      technologies: ["Java", "AndroidStudio"],
      competences: [],
    },
    {
      id: 2,
      title: "Création et Gestion de Base de Données",
      date: "Mars 2023",
      description:
        "Création et gestion de base de données pour une entreprise fictive de vente de produits",
      technologies: ["SQL"],
      competences: [
        "Compétences 4 : Gérer des données de l'information",
        "Compétences 5 : Conduire un projet",
        "Compétences 6 : Travailler dans une équipe informatique",
      ],
    },
    {
      id: 3,
      title: "SAE Les Bricoleuses",
      date: "Septembre 2024",
      description:
        "Création d'un site web pour une association pour enfant en bas âge. Lien du site: https://lesbricoleuses.org/",
      technologies: ["VueJs", "Django"],
      competences: [
        "Compétences 1 : Réaliser un développement d'application",
        "Compétences 2 : Optimiser des applications informatiques",
        "Compétences 3 : Administrer des systèmes informatiques communicants complexes",
        "Compétences 4 : Gérer des données de l'information",
        "Compétences 5 : Conduire un projet",
        "Compétences 6 : Travailler dans une équipe informatique",
      ],
    },
  ];
  </script>
  
<style>
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .page-title {
    color: #000;
    font-size: 2.5rem;
    margin: 0 0 10px 0;
  }
  
  /* Projects container */
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
  }
  
  /* Project item */
  .project-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .project-title {
    font-size: 1.5rem;
    margin: 0 0 10px;
  }
  
  .project-date {
    font-style: italic;
    color: #555;
    margin-bottom: 10px;
  }
  
  .project-description {
    margin-bottom: 15px;
  }
  
  .project-technologies,
  .project-competences {
    margin-top: 10px;
  }
  
  .project-technologies h3,
  .project-competences h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  .project-technologies ul,
  .project-competences ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .project-technologies li,
  .project-competences li {
    margin-bottom: 5px;
  }
  </style>
  