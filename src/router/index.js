import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import SingleProject from "@/views/SingleProject.vue";
import Contact from "@/views/Contact.vue";
import Portfolio from "@/views/Portfolio.vue";
import NotFound from "@/views/NotFound.vue";
import Legals from "@/views/Legals.vue";
import Pens from "../views/Pens";
import SinglePen from "../views/SinglePen";

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/portfolio', name: 'Portfolio', component: Portfolio},
    {path: '/lab', name: 'Pens', component: Pens},
    {path: '/about', name: 'About', component: About},
    {path: '/project/:slug', name: 'SingleProject', component: SingleProject},
    {path: '/pen/:slug', name: 'SinglePen', component: SinglePen},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/legals', name: 'Legals', component: Legals},
    {path: '*', name: "404", component: NotFound}
]

const router = new VueRouter({
    routes
})


export default router
