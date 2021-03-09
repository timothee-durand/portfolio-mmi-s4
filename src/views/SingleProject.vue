<template>
  <div class="lg:w-8/12">
    <img :src="project.acf.thumbnail " class="w-full" :alt="`Image from ${project.acf.title}`"/>
    <h2 class="font-serif font-bold text-3xl">{{ project.acf.title }}</h2>
    <p>{{ project.acf.subtitle }}</p>
    <p class="mt-2"><strong>Publication date :</strong> {{project.acf.publication}}</p>

    <article class="mt-6" v-html="project.acf.description"></article>
    <a :href="project.acf.url"
       class="block rounded-full bg-secondary border-accent w-6/12 p-4 text-center m-auto mt-5 lg:w-4/12 z-10 relative"> Visit Website </a>
  </div>
</template>
<script>


import {mapGetters} from "vuex";
import params from "@/param/params.js";

export default {
  name: "SingleProject",
  title(){
    return params.baseTitle + "A project"
  },
  data() {
    return {
      project: {
        acf: {
          thumbnail:"",
          description:"",
          keywords:"",
          title:"",
          url:"",
          subtitle:""
        }
      }
    }
  },
  computed: {
    ...mapGetters({allProjects:"getProjects"}),
  },
  methods: {
    setProject() {
      let project = this.allProjects.find(function (project) {
        if (project.acf.slug === this.$route.params.slug) return true
      }.bind(this))

      //console.log("project", project)
      if(project && "acf" in project) {
        this.project = project
      } else {
        this.$router.push("/404");
      }
    }
  },
  mounted() {
    this.setProject()
  },
  beforeUpdate() {
    this.setProject()
  },
  beforeRouteUpdate(to, from, next) {
    this.setProject();
    next();
  }
}
</script>

<style scoped>

</style>
