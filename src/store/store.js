import Vue from 'vue'
import Vuex from 'vuex'
import storePlugins from "@/plugins/storePlugins.js";

Vue.use(Vuex)

const ADD_PROJECTS = "ADD_PROJECTS";
const ADD_SKILLS = "ADD_SKILLS";
const ADD_COURSES = "ADD_COURSES";
const ADD_PENS = "ADD_PENS";


export default new Vuex.Store({
    plugins: [storePlugins],
    state: {
        projects: [],
        skills: [],
        courses: [],
        pens: []
    },
    mutations: {
        [ADD_PROJECTS](state, projects) {
            state.projects = projects;
        },
        [ADD_SKILLS](state, skills) {
            state.skills = skills;
        },
        [ADD_COURSES](state, courses) {
            state.courses = courses;
        },
        [ADD_PENS](state, pens) {
            state.pens = pens;
        }

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
    },
    actions: {
        async fetchProjects({commit}, config) {
            const projects = await this.$api.projects.fetch(config);
            commit(ADD_PROJECTS, projects);
            //console.log({ message: "Projects from vuex", users: projects });
        },
        async fetchSkills({commit}, config) {
            const skills = await this.$api.skills.fetch(config);
            commit(ADD_SKILLS, skills);
            //console.log({ message: "Skills from vuex", users: skills });
        },
        async fetchCourses({commit}, config) {
            const courses = await this.$api.courses.fetch(config);
            commit(ADD_COURSES, courses);
            //console.log({ message: "courses from vuex", users: courses });
        },
        async fetchPens({commit}, config) {
            const pens = await this.$api.pens.fetch(config);
            commit(ADD_PENS, pens);
            //console.log({ message: "courses from vuex", users: courses });
        },
        async initData(context) {
            context.dispatch("fetchSkills");
            context.dispatch("fetchCourses");
            context.dispatch("fetchProjects");
            context.dispatch("fetchPens");
        }

    },
    modules: {}
})
