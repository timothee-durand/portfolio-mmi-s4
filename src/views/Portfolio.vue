<template>
  <div class="lg:w-8/12 mx-auto">
    <h2 class="text-3xl font-bold font-serif">Portfolio</h2>
    <p>Here are my latest projects, enjoy ! </p>
    <div class="grid-cols-1 grid gap-3 w-full lg:grid-cols-3 lg:mt-5 ">
      <project-card v-for='project in allProjects ' :project="project"
                    :key="project.id" class="z-2"></project-card>
    </div>
  </div>
</template>

<script>

import ProjectCard from "@/components/ProjectCard.vue";
import {mapGetters} from "vuex";
import params from "@/param/params.js";
export default {
  name: "Portfolio",
  components: {ProjectCard},
  title(){
    return params.baseTitle + "Portfolio"
  },
  data() {
    return {
      allProjects2: []
    }
  },
  computed: {
    ...mapGetters({allProjects:'getProjects'})
  },
}
</script>

<style scoped>
.z-2 {
  z-index: 2;
}
</style>
