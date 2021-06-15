<template>
  <div class="lg:w-8/12 mx-auto">
    <h2 class="text-3xl font-bold font-serif">Lab</h2>
    <p>Here are my latest tests and creations on <a href="https://codepen.io/">Codepen</a>, enjoy ! </p>
    <div class="grid-cols-1 grid gap-3 w-full lg:grid-cols-3 lg:mt-5 ">
 
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
    return params.baseTitle + "Pens"
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
