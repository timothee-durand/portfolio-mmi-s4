<template>
  <div class="transition-all ease-in-out duration-200 ">
    <rounded-svg height="h-30" width="w-40" class="px-5 py-2">
      <img class="h-10 " :src="skill.picto" :alt="`Picto de ${skill.nom}`"/>
      <p class="ml-3">{{ skill.nom }}</p>
    </rounded-svg>

  </div>

</template>

<script>
import RoundedSvg from "./RoundedSvg.vue";

export default {
  name: "Skill",
  components: {RoundedSvg},
  props: [
    "showName",
    "skill"
  ],
  data() {
    return {
      sizeHeight: '',
      sizeWidth: "",

    }
  },
  mounted() {
    this.sizeHeight = this.size;
    this.sizeWidth = this.size;
  },
  methods: {
    _showName() {
      if (this.showName) {
        //this.sizeHeight = this.size ;
        this.sizeWidth = this.size;
        this.showName = false;
      } else {
        //this.sizeHeight = '' ;
        this.sizeWidth = '';
        this.showName = true;
      }
    }
  },
}
</script>

<style scoped>

</style>
