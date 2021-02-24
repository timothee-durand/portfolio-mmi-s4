<template>
  <div :class="{'m-5':!showName, 'm-2':showName }"  @click="_showName" class="transition-all ease-in-out duration-200">
    <rounded-svg :height="'h-'+sizeHeight" :width="'w-'+sizeWidth" class="px-3 ">
      <img :class="'w-'+(size-4)" :src="skill.picto"/>
      <p v-if="showName" class="ml-3">{{ skill.nom }}</p>
    </rounded-svg>

  </div>

</template>

<script>
import RoundedSvg from "./RoundedSvg.vue";

export default {
  name: "Skill",
  components: {RoundedSvg},
  props: [
    "size",
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
