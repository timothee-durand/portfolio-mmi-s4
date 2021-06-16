<template>
  <div class="lg:w-8/12 mx-auto">
    <h2 class="text-3xl font-bold font-serif">Lab</h2>
    <p>Here are my latest tests and creations on <a href="https://codepen.io/">Codepen</a>, enjoy ! </p>
    <div class="grid-cols-1 grid gap-3 w-full lg:grid-cols-3 lg:mt-5 ">
      <PenCard v-for="pen in allPens" :key="pen.id" :pen="pen"></PenCard>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import params from "@/param/params.js";
import PenCard from "../components/PenCard";
export default {
  name: "Pens",
  components: {PenCard},
  title(){
    return params.baseTitle + "Pens"
  },
  computed: {
    ...mapGetters({allPens:'getPens'})
  },
}
</script>

<style scoped>
</style>
