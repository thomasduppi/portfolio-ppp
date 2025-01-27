import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/HomeView.vue';
import Cv from '../views/CvView.vue';
import Experiences from '../views/ExperiencesView.vue';
import Competences from '../views/CompetencesView.vue';
import Projets from '../views/ProjetsView.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cv",
    name: "Cv",
    component: Cv,
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: Experiences,
  },
  {
    path: "/competences",
    name: "Competences",
    component: Competences,
  },
  {
    path: "/projets",
    name: "Projets",
    component: Projets,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
