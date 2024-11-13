import Vue from 'vue'
import Vuex from 'vuex'
import storePlugins from "@/plugins/storePlugins.js";
import projets from "@/store/projets";
import competences from "@/store/competences";
import formation from "@/store/formation";
import pens from "@/store/pens";

Vue.use(Vuex)


export default new Vuex.Store({
    plugins: [storePlugins],
    state: {
        projects: projets,
        skills: competences,
        courses: formation,
        pens: pens
    },
    getters: {
        getSkills(context) {
            return context.skills
        },
        getProjects(context) {
            return context.projects
        },
        getCourses(context) {
            return context.courses
        },
        getPens(context) {
            return context.pens
        },
        getPen(context, slug) {
            return context.pens.find(function (pen) {
                if (pen.acf.acf_pen_slug === slug) return true
            })
        }
    },
})
