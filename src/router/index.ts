import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/Home.vue';
import Cv from '@/components/Cv.vue';
import Experiences from '@/components/Experiences.vue';
import Competences from '@/components/Competences.vue';
import Projets from '@/components/Projets.vue';

const routes = [
  {
    path: "/portfolio-ppp",
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
