<template>
  <div class="lg:w-8/12">
    <Codepen :height="500" :url="pen.acf.acf_pen_url"></Codepen>
    <h2 class="font-serif font-bold text-3xl mt-4">{{ pen.acf.acf_pen_titre }}</h2>
    <article class="mt-4" v-html="pen.acf.acf_pen_description"></article>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import params from "@/param/params.js";
import Codepen from "../components/Codepen";

export default {
  name: "SinglePen",
  title() {
    return params.baseTitle + "A project"
  },
  components : {Codepen},
  data() {
    return {
      pen: {
        acf: {
          acf_pen_description: "",
          acf_pen_titre: "",
          acf_pen_url: "",
        }
      }
    }
  },
  computed: {
    ...mapGetters({allPens: "getPens"})
  },
  methods: {
    setProject() {
      let pen = this.allPens.find(function (pen) {
        if (pen.acf.acf_pen_slug === this.$route.params.slug) return true
      }.bind(this))

      //console.log("project", project)
      if (pen && "acf" in pen) {
        this.pen = pen

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
