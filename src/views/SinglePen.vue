<template>
  <div class="lg:w-8/12">
    <img :src="pen.acf.acf_pen_url+'/image/large.png'" class="w-full" :alt="`Image from ${pen.acf.acf_pen_title}`"/>
    <h2 class="font-serif font-bold text-3xl">{{ pen.acf.acf_pen_title }}</h2>
    <article class="mt-6" v-html="pen.acf.acf_pen_description"></article>
    <p :v-code-pen="optionsEmbed">
      <a :href="pen.acf.acf_pen_url"></a>
    </p>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import params from "@/param/params.js";

export default {
  name: "SingleProject",
  title() {
    return params.baseTitle + "A project"
  },
  components : {},
  data() {
    return {
      pen: {
        acf: {
          acf_pen_description: "",
          acf_pen_title: "",
          acf_pen_url: "",
        },
        author: "",
        hash: ""
      }
    }
  },
  computed: {
    ...mapGetters({allPens: "getPens"}),
    optionsEmbed() {
      console.log(this.pen)
      return {
        'data-height': '100%',
        'data-theme-id': 'dark',
        'data-slug-hash': this.pen.hash,
        'data-default-tab': 'result',
        'data-user': this.pen.author,
        'data-embed-version': 2,
        'data-pen-title': 'Demo',
      }
    }
  },
  methods: {
    setProject() {
      let pen = this.allPens.find(function (pen) {
        if (pen.acf.acf_pen_slug === this.$route.params.slug) return true
      }.bind(this))

      //console.log("project", project)
      if (pen && "acf" in pen) {
        this.pen = pen

        const arrayUrl = this.pen.acf.acf_pen_url.split('/');
        console.log(arrayUrl)
        this.pen.author = arrayUrl[3]
        this.pen.hash = arrayUrl[5]

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
