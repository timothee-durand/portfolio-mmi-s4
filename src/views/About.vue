<template>
  <div class="about mt-6">
    <h2 class="text-2xl font-bold font-serif">Who Am I ?</h2>
    <p>I'm a futur french web developper, actually studying in Montbéliard, a small town of France. I'm in DUT MMI
      (Multimedia and Internet class). </p>
    <h3 class="text-2xl font-bold font-serif mt-4">My skills</h3>

    <div class="flex flex-wrap justify-between">
      <skill v-for="skill in skills" :key="skill.id" :show-name="false"
             :skill="skill.acf"
             size="12"></skill>
    </div>
    <h3 class="text-2xl font-bold font-serif mt-4">My academic background</h3>

    <timeline :formations="courses"/>
  </div>
</template>
<script>
import Timeline from "@/components/Timeline.vue";
import Skill from "@/components/Skill.vue";
import {mapGetters} from "vuex";
export default {
  name:"About",
  components: {Skill, Timeline},
  computed: {
    ...mapGetters({skills:"getSkills", courses:"getCourses"})
  },
}
</script>
