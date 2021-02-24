<template>
  <div class="about mt-6 mx-auto w-8/12">
    <h2 class="text-2xl font-bold font-serif">Who Am I ?</h2>
    <p>I'm a futur french web developper, actually studying in Montbéliard, a small town of France. I'm in DUT MMI
      (Multimedia and Internet class). </p>
    <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2 ">
      <div>
        <h3 class="text-2xl font-bold font-serif lg:text-center">My skills</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 w-full justify-items-center items-center">
          <skill v-for="skill in skills" :key="skill.id" :show-name="false"
                 :skill="skill.acf"></skill>
        </div>
      </div>

      <div>
        <h3 class="text-2xl font-bold font-serif lg:text-center">My academic background</h3>
        <timeline class="mx-auto" :formations="courses"/>
      </div>
    </div>

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
