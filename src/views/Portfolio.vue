<template>
  <div>
    <h2 class="text-3xl font-bold font-serif">Portfolio</h2>
    <p>Here are my latest projects, enjoy ! </p>
    <div class="flex flex-col">
      <project-card v-for='project in allProjects ' :project="project"
                    :key="project.id"></project-card>
    </div>
  </div>
</template>

<script>

import ProjectCard from "@/components/ProjectCard.vue";
import {mapGetters} from "vuex";
export default {
  name: "Portfolio",
  components: {ProjectCard},
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

</style>
