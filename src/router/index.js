import { createRouter, createWebHistory } from 'vue-router';
import ProjectProgress from '../components/ProjectProgress.vue';
import TeamMembers from '../components/TeamMembers.vue';
import ProjectOverview from '../components/ProjectOverview.vue';
import Resources from '../components/Resources.vue';

const routes = [
  { path: '/', component: ProjectProgress },
  { path: '/progress', component: TeamMembers },
  { path: '/overview', component: ProjectOverview },
  { path: '/resources', component: Resources },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
