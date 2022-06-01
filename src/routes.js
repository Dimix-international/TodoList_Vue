import Vue from 'vue';
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage";

const todosPage = () => import( "@/pages/TodosPage");

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/todos',
        name: 'todoPage',
        component: todosPage,
    },
];

const router =  new VueRouter({
    mode: 'history',
    routes,
});

export default router;