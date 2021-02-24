<template>
  <div>
    <img :src="project.acf.thumbnail " class="w-full" :alt="`Image from ${project.acf.title}`"/>
    <h2 class="font-serif font-bold text-3xl">{{ project.acf.title }}</h2>
    <p>{{ project.acf.subtitle }}</p>

    <article class="mt-6" v-html="project.acf.description"></article>

    <a :href="project.acf.url"
       class="block rounded-full bg-secondary border-accent w-6/12 p-4 text-center m-auto mt-5"> Visit Website </a>
  </div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "SingleProject",
  data() {
    return {
      project: {}
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

      console.log(project)

      if("acf" in project) {
        this.project = project
      } else {
        this.router.push("/404");
      }

    }
  },
  mounted() {
    this.setProject()
  },
  beforeUpdate() {
    this.setProject()
  }
}
</script>

<style scoped>

</style>
