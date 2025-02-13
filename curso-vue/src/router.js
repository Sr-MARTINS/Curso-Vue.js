import { createRouter, createWebHistory } from "vue-router";

import BaseHome from "./views/BaseHome.vue";
import BaseSobre from "./views/BaseSobre.vue";
import ServiesVue from "./views/ServiesVue.vue";

const routes = [
    {
        path: "/",
        name: "basehome",
        component: BaseHome 
    },
    {
        path: "/produto",
        name: "basesobre",
        component: BaseSobre 
    }, 
    {
        path: "/services",
        name: "servicesvue",
        component: ServiesVue
    }
    

];

const router = createRouter({  history: createWebHistory(), routes})
export default router