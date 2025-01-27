<template>
    <div class="container">
      <div class="experiences-container">
        <div class="formations">
          <h2 class="section-title">Formations suivies</h2>
          <div v-for="formation in formations" :key="formation.id" class="formation-item">
            <img :src="formation.image" alt="Formation Image" class="formation-image" />
            <h3 class="formation-title">{{ formation.title }}</h3>
            <p class="formation-date">{{ formation.date }}</p>
            <p class="formation-description" v-html="formatText(formation.description)"></p>
          </div>
        </div>
  
        <div class="experiences">
          <h2 class="section-title">Expériences professionelles</h2>
          <div v-for="experience in experiences" :key="experience.id" class="experience-item">
            <img :src="experience.image" alt="Experience Image" class="experience-image" />
            <h3 class="experience-title">{{ experience.title }} - {{ experience.lieu }}</h3>
            <p class="experience-date">{{ experience.date }}</p>
            <p class="experience-description" v-html="formatText(experience.description)"></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Experiences",
    data() {
      return {
        formations: [
          {
            id: 1,
            title: "Lycée Charles de Gaulle - Muret",
            date: "2019 - 2022",
            description: "Baccalauréat Technologique STI2D option SIN.\\n Mention assez bien",
            image: "@/assets/cdg.jpg",
          },
          {
            id: 2,
            title: "IUT Blagnac - Université Toulouse 2 Jean Jaurès",
            date: "2022 - Présent",
            description: "BUT Informatique",
            image: "@/assets/iutblagnac.png",
          },
        ],
        experiences: [
          {
            id: 1,
            title: "Stage de découverte en entreprise",
            lieu: "BLEU122 - TOULOUSE",
            date: "Février 2019",
            description: `Stage dans une entreprise qui développe des applications mobiles.\\n
                          Observation des développeurs Android et IOS.\\n
                          Apprentissage de la base de la logique de programmation.\\n
                          Découverte du fonctionnement d’une PME.\\n
                          Participation aux réunions d’équipe en début et fin de semaine.`,
            image: "@/assets/bleu122.svg",
          },
          {
            id: 2,
            title: "Stage extrascolaire de coding",
            lieu: "EPSI - TOULOUSE",
            date: "Juillet 2022",
            description: `Apprentissage des bases de Java \\n
                          Apprentissage de HTML et initiation au CSS \\n
                          Fondamentaux Python`,
            image: "@/assets/epsi.webp",
          },
          {
            id: 3,
            title: "Alternance",
            lieu: "Mindflurry - TOULOUSE",
            date: "2023 - Présent",
            description: `Développement d'un module de gestion de salle de sport en PHP`,
            image: "@/assets/mindflurry.png",
          },
        ],
      };
    },
    methods: {
      formatText(text: string): string {
        return text.replace(/\\n/g, "<br>");
      },
    },
  });
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
}

.experiences-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.formations,
.experiences {
    flex: 1;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-align: center;
}

.formation-item,
.experience-item {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.formation-title,
.experience-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.formation-date,
.experience-date {
    font-style: italic;
    color: #555;
    margin-bottom: 10px;
}

.formation-description,
.experience-description {
    text-align: center;
}

.formation-image,
.experience-image {
    width: 100%;
    max-width: 150px;
    height: auto;
}


</style>